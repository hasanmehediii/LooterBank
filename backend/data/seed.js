const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../src/config/db');
const User = require('../src/models/userModel');
const Account = require('../src/models/accountModel');
const Transaction = require('../src/models/transactionModel');
const ActivityLog = require('../src/models/activityLogModel');
const users = require('./users.json');

dotenv.config({ path: __dirname + '/../.env' });

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Account.deleteMany();
    await Transaction.deleteMany();
    await ActivityLog.deleteMany();

    const createdUsers = await User.insertMany(users);

    const accounts = [
      {
        userIds: [createdUsers[0]._id],
        accountNumber: 'CHK-0000000001',
        accountType: 'checking',
        balance: 1500.50,
        currency: 'USD',
        status: 'open',
        overdraftLimit: 500,
      },
      {
        userIds: [createdUsers[1]._id],
        accountNumber: 'SAV-0000000002',
        accountType: 'savings',
        balance: 10000.00,
        currency: 'USD',
        status: 'open',
      },
      {
        userIds: [createdUsers[2]._id],
        accountNumber: 'CHK-0000000003',
        accountType: 'checking',
        balance: 500.00,
        currency: 'USD',
        status: 'frozen',
      },
      {
        userIds: [createdUsers[3]._id],
        accountNumber: 'SAV-0000000004',
        accountType: 'savings',
        balance: 25000.75,
        currency: 'USD',
        status: 'open',
        flags: ['high_balance'],
      },
      {
        userIds: [createdUsers[4]._id],
        accountNumber: 'CHK-0000000005',
        accountType: 'checking',
        balance: 3000.25,
        currency: 'USD',
        status: 'open',
      },
      {
        userIds: [createdUsers[5]._id, createdUsers[6]._id],
        accountNumber: 'CHK-0000000006',
        accountType: 'checking',
        balance: 5000.00,
        currency: 'USD',
        status: 'open',
      },
      {
        userIds: [createdUsers[7]._id],
        accountNumber: 'SAV-0000000007',
        accountType: 'savings',
        balance: 12000.00,
        currency: 'USD',
        status: 'open',
      },
      {
        userIds: [createdUsers[8]._id],
        accountNumber: 'CHK-0000000008',
        accountType: 'checking',
        balance: 800.00,
        currency: 'USD',
        status: 'open',
      },
      {
        userIds: [createdUsers[9]._id],
        accountNumber: 'SAV-0000000009',
        accountType: 'savings',
        balance: 50000.00,
        currency: 'USD',
        status: 'open',
        flags: ['high_balance', 'vip_client'],
      },
      {
        userIds: [createdUsers[0]._id, createdUsers[1]._id],
        accountNumber: 'CHK-0000000010',
        accountType: 'checking',
        balance: 250.00,
        currency: 'USD',
        status: 'open',
        overdraftLimit: 100,
      },
    ];

    const createdAccounts = await Account.insertMany(accounts);

    const transactions = [
      {
        accountId: createdAccounts[0]._id,
        type: 'debit',
        amount: 100,
        currency: 'USD',
        description: 'Grocery shopping',
        transactionDate: new Date(),
        status: 'completed',
        initiatedBy: createdUsers[0]._id,
      },
      {
        accountId: createdAccounts[1]._id,
        type: 'credit',
        amount: 2000,
        currency: 'USD',
        description: 'Salary deposit',
        transactionDate: new Date(),
        status: 'completed',
      },
      {
        accountId: createdAccounts[0]._id,
        type: 'debit',
        amount: 50,
        currency: 'USD',
        description: 'Gasoline',
        transactionDate: new Date(),
        status: 'completed',
        initiatedBy: createdUsers[0]._id,
      },
      {
        accountId: createdAccounts[3]._id,
        type: 'credit',
        amount: 5000,
        currency: 'USD',
        description: 'Stock dividend',
        transactionDate: new Date(),
        status: 'completed',
      },
      {
        accountId: createdAccounts[4]._id,
        type: 'debit',
        amount: 300,
        currency: 'USD',
        description: 'Online purchase',
        transactionDate: new Date(),
        status: 'completed',
        initiatedBy: createdUsers[4]._id,
      },
      {
        accountId: createdAccounts[5]._id,
        type: 'debit',
        amount: 150,
        currency: 'USD',
        description: 'Restaurant',
        transactionDate: new Date(),
        status: 'completed',
        initiatedBy: createdUsers[5]._id,
      },
      {
        accountId: createdAccounts[6]._id,
        type: 'credit',
        amount: 1000,
        currency: 'USD',
        description: 'Freelance payment',
        transactionDate: new Date(),
        status: 'completed',
      },
      {
        accountId: createdAccounts[7]._id,
        type: 'debit',
        amount: 25,
        currency: 'USD',
        description: 'Coffee shop',
        transactionDate: new Date(),
        status: 'completed',
        initiatedBy: createdUsers[7]._id,
      },
      {
        accountId: createdAccounts[8]._id,
        type: 'credit',
        amount: 10000,
        currency: 'USD',
        description: 'Investment return',
        transactionDate: new Date(),
        status: 'completed',
      },
      {
        accountId: createdAccounts[9]._id,
        type: 'debit',
        amount: 75,
        currency: 'USD',
        description: 'Book store',
        transactionDate: new Date(),
        status: 'completed',
        initiatedBy: createdUsers[0]._id,
      },
    ];

    const createdTransactions = await Transaction.insertMany(transactions);

    const activityLogs = [
      {
        userId: createdUsers[0]._id,
        action: 'user.login',
        ip: '192.168.1.1',
        device: 'Chrome on macOS',
      },
      {
        userId: createdUsers[1]._id,
        action: 'user.login',
        ip: '10.0.0.1',
        device: 'Safari on iOS',
      },
      {
        userId: createdUsers[2]._id,
        action: 'account.status_change',
        resourceType: 'account',
        resourceId: createdAccounts[2]._id,
        details: {
          oldStatus: 'open',
          newStatus: 'frozen',
          reason: 'Suspicious activity detected',
        },
        ip: '172.16.0.1',
        device: 'Firefox on Windows',
      },
      {
        userId: createdUsers[3]._id,
        action: 'user.profile_update',
        ip: '192.168.1.100',
        device: 'Chrome on macOS',
      },
      {
        userId: createdUsers[4]._id,
        action: 'transaction.create',
        resourceType: 'transaction',
        resourceId: createdTransactions[4]._id,
        ip: '192.168.1.101',
        device: 'Android App',
      },
      {
        userId: createdUsers[5]._id,
        action: 'user.login',
        ip: '192.168.1.102',
        device: 'Chrome on Windows',
      },
      {
        userId: createdUsers[6]._id,
        action: 'user.login',
        ip: '192.168.1.103',
        device: 'Safari on macOS',
      },
      {
        userId: createdUsers[7]._id,
        action: 'transaction.create',
        resourceType: 'transaction',
        resourceId: createdTransactions[7]._id,
        ip: '192.168.1.104',
        device: 'Android App',
      },
      {
        userId: createdUsers[8]._id,
        action: 'account.create',
        resourceType: 'account',
        resourceId: createdAccounts[8]._id,
        ip: '192.168.1.105',
        device: 'Firefox on Linux',
      },
      {
        userId: createdUsers[9]._id,
        action: 'user.mfa_enable',
        ip: '192.168.1.106',
        device: 'Chrome on macOS',
      },
    ];

    await ActivityLog.insertMany(activityLogs);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Account.deleteMany();
    await Transaction.deleteMany();
    await ActivityLog.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
