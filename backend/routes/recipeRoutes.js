const express = require('express');
const recipeController = require('../controllers/recipeController');
const asyncHandler = require('../middleware/asyncHandler');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.post('/create', authenticate, asyncHandler(recipeController.createRecipe));
router.get('/', authenticate, asyncHandler(recipeController.getUserRecipes))
router.delete('/:id', authenticate, asyncHandler(recipeController.deleteRecipe))
router.put('/:id', authenticate, asyncHandler(recipeController.updateRecipe))

module.exports = router;