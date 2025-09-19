const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  ipAddress: {
    type: String,
  },
  device: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AuditLog', AuditLogSchema, 'auditlogs');