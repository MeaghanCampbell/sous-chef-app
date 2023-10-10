const express = require('express')
const myWeekController = require('../controllers/myWeekController')
const asyncHandler = require('../middleware/asyncHandler');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.post('/add', authenticate, asyncHandler(myWeekController.addRecipeToMyWeek))
router.delete('/remove/:recipeId', authenticate, asyncHandler(myWeekController.removeRecipeFromMyWeek))
router.get('/', authenticate, asyncHandler(myWeekController.getMyWeek))

module.exports = router;