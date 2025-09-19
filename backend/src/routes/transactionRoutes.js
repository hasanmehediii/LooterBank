const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// @route   GET api/transactions
// @desc    Get all transactions
// @access  Public
router.get('/', transactionController.getAllTransactions);

module.exports = router;