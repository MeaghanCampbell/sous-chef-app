const { Recipe, User, Ingredient, IngredientQuantity } = require('../models')

exports.createRecipe = async (req, res) => {
    const { title, steps, ingredients } = req.body;
    const userId = req.userId;
    const recipe = await Recipe.create({ title, steps, userId });
    for (let ingredient of ingredients) {
        const [ing, created] = await Ingredient.findOrCreate({ where: { name: ingredient.name } });
        await IngredientQuantity.create({ recipe_id: recipe.id, ingredient_id: ing.id, quantity: ingredient.quantity });
    }
    res.status(201).json(recipe);
};

