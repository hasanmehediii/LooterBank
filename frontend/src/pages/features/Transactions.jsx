import React, { useState, useEffect, useContext } from 'react';
import API from '../../connection/api';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import './Transactions.css';

const Transactions = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await API.get('/api/transactions/my-transactions', {
          headers: {
            'x-auth-token': token,
          },
        });
        setTransactions(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch transactions.');
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
      <Navbar />
      <div className="transactions-container">
        <div className="transactions-content">
          <h2 className="transactions-title">Your Transactions</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transactions;
