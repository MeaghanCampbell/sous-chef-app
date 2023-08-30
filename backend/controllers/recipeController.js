const { Recipe, User, Ingredient, IngredientQuantity } = require('../models')

exports.createRecipe = async (req, res) => {
    const { title, category, steps, ingredients } = req.body;
    const user_id = req.userId;
    const recipe = await Recipe.create({ title, category, steps, user_id });
    for (let ingredient of ingredients) {
        const [ing, created] = await Ingredient.findOrCreate({ where: { name: ingredient.name } });
        await IngredientQuantity.create({ recipe_id: recipe.id, ingredient_id: ing.id, quantity: ingredient.quantity });
    }
    res.status(201).json(recipe);
};

exports.getUserRecipes = async (req, res) => {
    const userId = req.userId;
    const recipes = await Recipe.findAll({
        where: { user_id: userId },
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
    res.json(formattedRecipes);
};

exports.updateRecipe = async (req, res) => {
    const { title, category, steps, ingredients } = req.body;
    const recipe = await Recipe.findByPk(req.params.id);
    if (recipe) {
        recipe.title = title;
        recipe.category = category;
        recipe.steps = steps;
        // Delete all existing ingredients for the recipe
        await IngredientQuantity.destroy({ where: { recipe_id: recipe.id } });
        // Add new ingredients
        for (let ingredient of ingredients) {
            const [ing, created] = await Ingredient.findOrCreate({ where: { name: ingredient.name } });
            await IngredientQuantity.create({ recipe_id: recipe.id, ingredient_id: ing.id, quantity: ingredient.quantity });
        }
        await recipe.save();
        res.json(recipe);
    } else {
        res.status(404).json({ message: 'Cannot find recipe' });
    }
};


// delete a user
exports.deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findByPk(req.params.id);
    if (recipe) {
        await recipe.destroy();
        res.json({ message: 'Deleted Recipe' });
    } else {
        res.status(404).json({ message: 'Cannot find recipe' });
    }
};

