const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Account = require('../models/accountModel');

// Signup User
exports.signup = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Check if user exists
    let user = await User.findOne({ email }).session(session);
    if (user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      passwordHash,
      phone,
    });

    const savedUser = await user.save({ session });

    // Create new account
    const accountNumber = Math.floor(10000000 + Math.random() * 90000000).toString();

    const account = new Account({
      userId: savedUser._id,
      accountNumber,
      accountType: 'savings',
      balance: 0,
      currency: 'BDT',
    });

    await account.save({ session });

    await session.commitTransaction();
    session.endSession();

    // Create and return token
    const payload = {
      user: {
        id: savedUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and return token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
