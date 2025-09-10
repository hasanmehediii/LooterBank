const User = require('../models/userModel');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash'); // Exclude password hash
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};