const express = require('express');
const usersController = require('../controllers/userController');
const asyncHandler = require('../middleware/asyncHandler');
const router = express.Router();

// login a user
router.post('/login', asyncHandler(usersController.login));
// Add a user
router.post('/create', asyncHandler(usersController.createUser));

// Get all users
router.get('/', asyncHandler(usersController.getAllUsers));

// Get one user by ID
router.get('/:id', asyncHandler(usersController.getUserById));

// Delete a user
router.delete('/:id', asyncHandler(usersController.deleteUser));

module.exports = router;