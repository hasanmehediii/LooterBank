const Account = require('../models/accountModel');

exports.getAllAccounts = async (req, res) => {
  try {
    let accounts;
    if (req.query.userId) {
      accounts = await Account.find({ userId: req.query.userId });
    } else {
      accounts = await Account.find();
    }
    res.json(accounts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};