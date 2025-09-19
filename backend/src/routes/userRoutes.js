const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// @route   GET api/users/me
// @desc    Get user profile
// @access  Private
router.get('/me', auth, userController.getUserProfile);

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', userController.getAllUsers);

module.exports = router;