const Loan = require('../models/loanModel');
const Account = require('../models/accountModel');

exports.applyForLoan = async (req, res) => {
  const { reason, amount, time, propertyDetails } = req.body;

  try {
    const newLoan = new Loan({
      userId: req.user.id,
      reason,
      amount,
      time,
      propertyDetails,
    });

    const loan = await newLoan.save();
    res.json(loan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('userId', ['name', 'email']);
    res.json(loans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateLoanStatus = async (req, res) => {
  const { status } = req.body;

  try {
    let loan = await Loan.findById(req.params.id);

    if (!loan) {
      return res.status(404).json({ msg: 'Loan not found' });
    }

    loan.status = status;

    if (status === 'approved') {
      const account = await Account.findOne({ userId: loan.userId });
      account.balance += loan.amount;
      await account.save();
    }

    await loan.save();

    res.json(loan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
