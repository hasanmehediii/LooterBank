import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaTachometerAlt, FaExchangeAlt, FaPiggyBank, FaPaperPlane, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import './UserHome.css';

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="user-home-container">
        <div className="main-content">
          <div className="welcome-header">
            <h2 className="welcome-title">Welcome back, {user ? user.name : 'User'}!</h2>
            <p className="welcome-subtitle">Here's a summary of your account.</p>
          </div>

          <div className="metrics-container">
            <div className="metric-card">
              <h3 className="metric-title">Current Balance</h3>
              <p className="metric-value">
                {user && user.account ? `${user.account.balance} ${user.account.currency}` : 'Loading...'}
              </p>
            </div>
            <div className="metric-card">
              <h3 className="metric-title">Account Number</h3>
              <p className="metric-value">
                {user && user.account ? user.account.accountNumber : 'Loading...'}
              </p>
            </div>
            <div className="metric-card">
              <h3 className="metric-title">Account Type</h3>
              <p className="metric-value">
                {user && user.account ? user.account.accountType : 'Loading...'}
              </p>
            </div>
          </div>

          <div className="feature-cards-container">
            <Link to="/home/deposit" className="feature-card">
              <div className="feature-icon"><FaUniversity /></div>
              <h3 className="feature-title">Deposit</h3>
              <p className="feature-description">Add money to your account.</p>
            </Link>
            <Link to="/home/send-money" className="feature-card">
              <div className="feature-icon"><FaPaperPlane /></div>
              <h3 className="feature-title">Send Money</h3>
              <p className="feature-description">Transfer money to other accounts.</p>
            </Link>
            <Link to="/home/cashout" className="feature-card">
              <div className="feature-icon"><FaMoneyBillWave /></div>
              <h3 className-="feature-title">Cashout</h3>
              <p className="feature-description">Withdraw money from your account.</p>
            </Link>
            <Link to="/home/transactions" className="feature-card">
              <div className="feature-icon"><FaExchangeAlt /></div>
              <h3 className="feature-title">Transactions</h3>
              <p className="feature-description">View your transaction history.</p>
            </Link>
            <Link to="/home/loan-apply" className="feature-card">
              <div className="feature-icon"><FaPiggyBank /></div>
              <h3 className="feature-title">Apply for Loan</h3>
              <p className="feature-description">Get a loan from the bank.</p>
            </Link>
          </div>

          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserHome;