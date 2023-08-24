const express = require('express');
const usersController = require('../controllers/userController');
const router = express.Router();

router.post('/create', (req, res, next) => {
    console.log("Attempting to create user");
    next();
}, usersController.createUser);

// ... other user routes

module.exports = router;