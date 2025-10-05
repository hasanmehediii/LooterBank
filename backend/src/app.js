const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// Connect to database
connectDB();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173', 'https://looter-bank-apft-gylsnvnst-mehedi-hasans-projects-1f9ebc78.vercel.app/', 'https://looter-bank-apft.vercel.app', 'https://looter-bank-apft-i61dgsvyu-mehedi-hasans-projects-1f9ebc78.vercel.app'];

const options = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/accounts', require('./routes/accountRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/admin/actions', require('./routes/adminRoutes'));
app.use('/api/cards', require('./routes/cardRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/audit-logs', require('./routes/auditLogRoutes'));
app.use('/api/loans', require('./routes/loanRoutes'));

module.exports = app;
