const User = require('../models/userModel');
const Account = require('../models/accountModel');

exports.getLoggedInUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash'); // Exclude password hash
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateUserProfile = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-passwordHash');
    const usersWithAccounts = await Promise.all(users.map(async (user) => {
      const accounts = await Account.find({ userId: user._id });
      return { ...user.toObject(), accounts };
    }));
    res.json(usersWithAccounts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getUserDashboardData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash');
    const account = await Account.findOne({ userId: req.user.id });

    if (!user || !account) {
      return res.status(404).json({ msg: 'User or account not found' });
    }

    res.json({ user, account });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};