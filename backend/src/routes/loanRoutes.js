const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

// @route   POST api/loans/apply
// @desc    Apply for a loan
// @access  Private
router.post('/apply', authMiddleware, loanController.applyForLoan);

// @route   GET api/loans
// @desc    Get all loan applications
// @access  Admin
router.get('/', authMiddleware, loanController.getAllLoans);

// @route   PUT api/loans/:id
// @desc    Update loan status
// @access  Admin
router.put('/:id', authMiddleware, adminMiddleware, loanController.updateLoanStatus);

module.exports = router;
