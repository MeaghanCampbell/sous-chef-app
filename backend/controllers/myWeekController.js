// backend/controllers/myWeekController.js
const MyWeek = require('../models/myWeek')
const Recipe = require('../models/recipe')
const MyWeekRecipe = require('../models/myWeekRecipe') // import the MyWeekRecipe model

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
    const recipes = await Recipe.findAll({ where: { id: recipeIds } });

    if (recipes.length > 0) {
        res.status(200).json({ recipes });
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