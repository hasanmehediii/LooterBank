const express = require('express');
const router = express.Router();
const { signup, login, getMe, updateMe } = require('../controllers/authController');
const auth = require('../middlewares/authMiddleware');

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', signup);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   GET api/auth/me
// @desc    Get authenticated user profile
// @access  Private
router.get('/me', auth, getMe);

// @route   PUT api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/me', auth, updateMe);

module.exports = router;
