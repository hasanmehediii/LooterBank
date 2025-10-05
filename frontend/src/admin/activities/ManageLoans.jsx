import React, { useState, useEffect } from 'react';
import API from '../../connection/api';

const ManageLoans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await API.get('/api/loans', {
          headers: {
            'x-auth-token': token,
          },
        });
        setLoans(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch loans.');
        setLoading(false);
      }
    };

    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await API.get('/api/users/profile', {
          headers: {
            'x-auth-token': token,
          },
        });
        setUserRole(res.data.user.role);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLoans();
    fetchUserRole();
  }, []);

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await API.put(`/api/loans/${id}`, { status: 'approved' }, {
        headers: {
          'x-auth-token': token,
        },
      });
      setLoans(loans.map(loan => loan._id === id ? { ...loan, status: 'approved' } : loan));
    } catch (err) {
      setError('Failed to approve loan.');
    }
  };

  const handleDecline = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await API.put(`/api/loans/${id}`, { status: 'declined' }, {
        headers: {
          'x-auth-token': token,
        },
      });
      setLoans(loans.map(loan => loan._id === id ? { ...loan, status: 'declined' } : loan));
    } catch (err) {
      setError('Failed to decline loan.');
    }
  };

  return (
    <div className="manage-loans-container">
      <h2 className="manage-loans-title">Manage Loan Applications</h2>
      <p>User Role: {userRole}</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <table className="loans-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Reason</th>
              <th>Amount</th>
              <th>Time</th>
              <th>Property Details</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan._id}>
                <td>{loan.userId.name}</td>
                <td>{loan.reason}</td>
                <td>{loan.amount}</td>
                <td>{loan.time}</td>
                <td>{loan.propertyDetails}</td>
                <td>{loan.status}</td>
                <td>
                  {loan.status === 'pending' && (
                    <>
                      <button onClick={() => handleApprove(loan._id)} className="btn-approve">Approve</button>
                      <button onClick={() => handleDecline(loan._id)} className="btn-decline">Decline</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageLoans;
