const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Account = require('../models/accountModel');
require('dotenv').config();


// ======================= SIGNUP =======================
exports.signup = async (req, res) => {
  const { name, email, password, phone, accountType, initialBalance } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Check if user already exists
    let user = await User.findOne({ email }).session(session);
    if (user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    user = new User({
      name,
      email,
      passwordHash,
      phone,
    });

    const savedUser = await user.save({ session });

    // Create account
    const accountNumber = Math.floor(10000000 + Math.random() * 90000000).toString();

    const account = new Account({
      userId: savedUser._id,
      accountNumber,
      accountType: accountType || 'savings',
      balance: initialBalance || 0,
      currency: 'BDT',
    });

    const savedAccount = await account.save({ session });

    await session.commitTransaction();
    session.endSession();

    // JWT payload
    const payload = {
      user: {
        id: savedUser.id,
        name: savedUser.name,
        role: savedUser.role,
      },
    };

    // Return token + account number
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token, accountNumber: savedAccount.accountNumber });
    });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// ======================= LOGIN =======================
exports.login = async (req, res) => {
  const { identifier, accountNumber, password } = req.body;

  try {
    // 1. Find user by email or phone
    let user;
    if (identifier.includes('@')) {
      user = await User.findOne({ email: identifier });
    } else {
      user = await User.findOne({ phone: identifier });
    }

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // 2. Verify account number belongs to this user
    const account = await Account.findOne({ accountNumber });
    if (!account || account.userId.toString() !== user._id.toString()) {
      return res.status(400).json({ msg: 'Invalid account number' });
    }

    // 3. Validate password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // 4. Create JWT
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, async (err, token) => {
      if (err) throw err;

      const userWithAccount = await User.findById(user.id).select('-passwordHash');
      res.json({
        token,
        user: { ...userWithAccount.toObject(), account },
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// ======================= GET ME =======================
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash');
    const account = await Account.findOne({ userId: req.user.id });
    res.json({ ...user.toObject(), account });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// ======================= UPDATE ME =======================
exports.updateMe = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Update user fields
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
