const express = require('express');
const router = express.Router();
const auditLogController = require('../controllers/auditLogController');

// @route   GET api/audit-logs
// @desc    Get all audit logs
// @access  Public
router.get('/', auditLogController.getAllAuditLogs);

module.exports = router;