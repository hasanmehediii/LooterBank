const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

const allowedOrigins = ['http://localhost:3000', 'looter-bank-472gv7p05-mehedi-hasans-projects-1f9ebc78.vercel.app', 'looter-bank.vercel.app'];

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

module.exports = app;
