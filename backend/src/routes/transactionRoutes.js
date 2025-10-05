const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   GET api/transactions
// @desc    Get all transactions
// @access  Public
router.get('/', transactionController.getAllTransactions);

// @route   GET api/transactions/my-transactions
// @desc    Get user transactions
// @access  Private
router.get('/my-transactions', authMiddleware, transactionController.getUserTransactions);

module.exports = router;