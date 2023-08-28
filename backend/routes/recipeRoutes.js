const express = require('express');
const recipeController = require('../controllers/recipeController');
const asyncHandler = require('../middleware/asyncHandler');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.post('/create', authenticate, asyncHandler(recipeController.createRecipe));

module.exports = router;