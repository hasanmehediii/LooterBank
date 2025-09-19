const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// @route   GET api/admin/actions
// @desc    Get all admin actions
// @access  Public
router.get('/', adminController.getAllAdminActions);

module.exports = router;