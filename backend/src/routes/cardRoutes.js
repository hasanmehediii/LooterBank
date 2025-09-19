const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// @route   GET api/cards
// @desc    Get all cards
// @access  Public
router.get('/', cardController.getAllCards);

module.exports = router;