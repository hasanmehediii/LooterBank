const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  mfaEnabled: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
  },
  profile: {
    phone: String,
    address: String,
    dob: String,
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

module.exports = mongoose.model('User', UserSchema, 'user');