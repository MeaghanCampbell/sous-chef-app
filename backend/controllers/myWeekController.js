// backend/controllers/myWeekController.js
const MyWeek = require('../models/myWeek')
const MyWeekRecipe = require('../models/myWeekRecipe') // import the MyWeekRecipe model
const Ingredient = require('../models/ingredient')
const IngredientQuantity = require('../models/ingredientQuantity')
const Recipe = require('../models/recipe')


exports.addRecipeToMyWeek = async (req, res) => {
    const { recipeId } = req.body;
    const user_id = req.userId;
    const myWeek = await MyWeek.findOne({ where: { user_id } });

    // Check if the recipe is already in My Week
    const existingEntry = await MyWeekRecipe.findOne({ where: { myWeekId: myWeek.id, recipeId } });
    if (existingEntry) {
        return res.status(400).json({ message: 'Recipe already in My Week' });
    }

    // Add the recipe to My Week
    await MyWeekRecipe.create({ myWeekId: myWeek.id, recipeId });
    res.status(200).json({ message: 'Recipe added to My Week' });
};

exports.getMyWeek = async (req, res) => {
    const user_id = req.userId;
    const myWeek = await MyWeek.findOne({ where: { user_id } });

    // Get the recipes in My Week
    const myWeekRecipes = await MyWeekRecipe.findAll({ where: { myWeekId: myWeek.id } });
    const recipeIds = myWeekRecipes.map(myWeekRecipe => myWeekRecipe.recipeId);
    const recipes = await Recipe.findAll({ 
        where: { id: recipeIds },
        include: [
            {
                model: Ingredient,
                through: {
                    model: IngredientQuantity,
                    attributes: ['quantity']
                },
                attributes: ['name']
            }
        ]
    });

    const formattedRecipes = recipes.map(recipe => {
        const formattedIngredients = recipe.Ingredients.map(ingredient => {
            return {
                name: ingredient.name,
                quantity: ingredient.IngredientQuantity.quantity
            };
        });
        // Return the recipe with the formatted ingredients
        return { ...recipe.toJSON(), Ingredients: formattedIngredients };
    });

    if (formattedRecipes.length > 0) {
        res.status(200).json({ recipes: formattedRecipes });
    } else {
        res.status(400).json({ message: 'No recipes found in My Week' });
    }
};

exports.removeRecipeFromMyWeek = async (req, res) => {
    const { recipeId } = req.params;
    const user_id = req.userId;
    const myWeek = await MyWeek.findOne({ where: { user_id } });

    // Remove the recipe from My Week
    const rowsDeleted = await MyWeekRecipe.destroy({ where: { myWeekId: myWeek.id, recipeId } });
    if (rowsDeleted > 0) {
        res.status(200).json({ message: 'Recipe removed from My Week' });
    } else {
        res.status(400).json({ message: 'Recipe not found in My Week' });
    }
};