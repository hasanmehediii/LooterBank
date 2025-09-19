// seed.js
const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://mhmehedi:98Jgpoup8@cluster0.gynfsxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// ====== Schemas ======
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  phone: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  status: { type: String, enum: ["active", "blocked", "pending"], default: "active" },
}, { timestamps: true });

const accountSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  accountNumber: { type: String, unique: true },
  accountType: { type: String, enum: ["savings", "current"], default: "savings" },
  balance: { type: Number, default: 0 },
  currency: { type: String, default: "BDT" }
}, { timestamps: true });

const transactionSchema = new mongoose.Schema({
  accountId: mongoose.Schema.Types.ObjectId,
  type: { type: String, enum: ["deposit", "withdraw", "transfer", "admin_adjustment"] },
  amount: Number,
  currency: { type: String, default: "BDT" },
  status: { type: String, enum: ["success", "pending", "failed"], default: "success" },
  description: String,
  fromAccountId: mongoose.Schema.Types.ObjectId,
  toAccountId: mongoose.Schema.Types.ObjectId
}, { timestamps: true });

const adminActionSchema = new mongoose.Schema({
  adminId: mongoose.Schema.Types.ObjectId,
  action: String,
  targetUserId: mongoose.Schema.Types.ObjectId,
  description: String
}, { timestamps: true });

const cardSchema = new mongoose.Schema({
  accountId: mongoose.Schema.Types.ObjectId,
  cardNumber: String,
  expiryDate: String,
  cvvHash: String,
  cardType: { type: String, enum: ["debit", "credit"], default: "debit" },
  status: { type: String, enum: ["active", "blocked"], default: "active" }
}, { timestamps: true });

const notificationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  message: String,
  read: { type: Boolean, default: false }
}, { timestamps: true });

const auditLogSchema = new mongoose.Schema({
  event: String,
  userId: mongoose.Schema.Types.ObjectId,
  ipAddress: String,
  device: String
}, { timestamps: true });

// ====== Models ======
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
const Transaction = mongoose.model("Transaction", transactionSchema);
const AdminAction = mongoose.model("AdminAction", adminActionSchema);
const Card = mongoose.model("Card", cardSchema);
const Notification = mongoose.model("Notification", notificationSchema);
const AuditLog = mongoose.model("AuditLog", auditLogSchema);

// ====== Seed Function ======
async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await mongoose.connection.db.dropDatabase();
    console.log("🗑️ Old database dropped");

    // ---- Users ----
    const users = await User.insertMany([
      { name: "Mehedi Hasan", email: "mehedi@example.com", passwordHash: "pw1", phone: "+8801712345678", role: "user" },
      { name: "Admin User", email: "admin@example.com", passwordHash: "pw2", phone: "+8801999999999", role: "admin" },
      { name: "John Doe", email: "john@example.com", passwordHash: "pw3", phone: "+8801888888888", role: "user" }
    ]);
    console.log("👤 Users inserted");

    // ---- Accounts ----
    const accounts = await Account.insertMany([
      { userId: users[0]._id, accountNumber: "20250001", accountType: "savings", balance: 15000 },
      { userId: users[1]._id, accountNumber: "20250002", accountType: "current", balance: 50000 },
      { userId: users[2]._id, accountNumber: "20250003", accountType: "savings", balance: 7000 }
    ]);
    console.log("💳 Accounts inserted");

    // ---- Transactions ----
    await Transaction.insertMany([
      { accountId: accounts[0]._id, type: "deposit", amount: 2000, description: "Initial deposit" },
      { accountId: accounts[0]._id, type: "withdraw", amount: 500, description: "ATM cash withdrawal" },
      { accountId: accounts[2]._id, type: "transfer", amount: 1000, fromAccountId: accounts[2]._id, toAccountId: accounts[0]._id, description: "Transfer to Mehedi" }
    ]);
    console.log("💰 Transactions inserted");

    // ---- AdminActions ----
    await AdminAction.insertMany([
      { adminId: users[1]._id, action: "freeze_account", targetUserId: users[2]._id, description: "Suspicious activity detected" },
      { adminId: users[1]._id, action: "approve_account", targetUserId: users[0]._id, description: "Account approved" },
      { adminId: users[1]._id, action: "increase_limit", targetUserId: users[0]._id, description: "Daily limit increased" }
    ]);
    console.log("🛠️ AdminActions inserted");

    // ---- Cards ----
    await Card.insertMany([
      { accountId: accounts[0]._id, cardNumber: "4111111111111111", expiryDate: "12/29", cvvHash: "cvv1", cardType: "debit" },
      { accountId: accounts[1]._id, cardNumber: "4222222222222222", expiryDate: "05/28", cvvHash: "cvv2", cardType: "credit" },
      { accountId: accounts[2]._id, cardNumber: "4333333333333333", expiryDate: "07/30", cvvHash: "cvv3", cardType: "debit" }
    ]);
    console.log("💳 Cards inserted");

    // ---- Notifications ----
    await Notification.insertMany([
      { userId: users[0]._id, title: "Deposit Alert", message: "You deposited 2000 BDT" },
      { userId: users[2]._id, title: "Transfer Alert", message: "You sent 1000 BDT to Mehedi" },
      { userId: users[0]._id, title: "Withdrawal Alert", message: "You withdrew 500 BDT" }
    ]);
    console.log("🔔 Notifications inserted");

    // ---- AuditLogs ----
    await AuditLog.insertMany([
      { event: "user_login", userId: users[0]._id, ipAddress: "103.54.11.22", device: "Chrome / Windows" },
      { event: "user_login", userId: users[2]._id, ipAddress: "103.54.99.88", device: "Firefox / Linux" },
      { event: "user_login", userId: users[1]._id, ipAddress: "103.54.77.44", device: "Safari / Mac" }
    ]);
    console.log("📜 AuditLogs inserted");

    console.log("🎉 Database seeded with all 7 collections!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
}

seed();
