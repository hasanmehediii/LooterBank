const AuditLog = require('../models/auditLogModel');

exports.getAllAuditLogs = async (req, res) => {
  try {
    const auditLogs = await AuditLog.find();
    res.json(auditLogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};