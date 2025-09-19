const AdminAction = require('../models/adminActionModel');

exports.getAllAdminActions = async (req, res) => {
  try {
    const adminActions = await AdminAction.find();
    res.json(adminActions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};