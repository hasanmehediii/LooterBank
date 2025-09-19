const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// @route   GET api/accounts
// @desc    Get all accounts
// @access  Public
router.get('/', accountController.getAllAccounts);

module.exports = router;