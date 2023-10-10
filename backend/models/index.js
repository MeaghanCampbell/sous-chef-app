const User = require('./user')
const Recipe = require('./recipe')
const Ingredient = require('./ingredient')
const IngredientQuantity = require('./ingredientQuantity');
const MyWeek = require('./myWeek')
const MyWeekRecipe = require('./myWeekRecipe')

User.hasMany(Recipe, {
    foreignKey: 'user_id'
})

User.hasOne(MyWeek, {
    foreignKey: 'user_id'
})

MyWeek.hasMany(MyWeekRecipe, {
    foreignKey: 'myWeekId'
});

MyWeekRecipe.belongsTo(MyWeek, {
    foreignKey: 'myWeekId'
});

Recipe.hasMany(MyWeekRecipe, {
    foreignKey: 'recipeId'
});

MyWeekRecipe.belongsTo(Recipe, {
    foreignKey: 'recipeId'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
})

Recipe.belongsToMany(Ingredient, {
    through: IngredientQuantity,
    foreignKey: 'recipe_id',
    otherKey: 'ingredient_id'
});

Ingredient.belongsToMany(Recipe, {
    through: IngredientQuantity,
    foreignKey: 'ingredient_id',
    otherKey: 'recipe_id'
});

IngredientQuantity.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

IngredientQuantity.belongsTo(Ingredient, {
    foreignKey: 'ingredient_id'
});

module.exports = { 
    User, 
    Recipe, 
    Ingredient, 
    IngredientQuantity,
    MyWeek,
    MyWeekRecipe
}
