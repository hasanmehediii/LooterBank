const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// @route   GET api/notifications
// @desc    Get all notifications
// @access  Public
router.get('/', notificationController.getAllNotifications);

module.exports = router;