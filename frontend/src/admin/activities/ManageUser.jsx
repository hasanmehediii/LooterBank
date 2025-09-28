import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ManageUserContainer = styled.div`
  padding: 2rem;
  background: #f0f2f5;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const UserItem = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #777;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const UserCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a237e;
    margin-bottom: 0;
    text-align: center;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #1a237e;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: rgba(255, 255, 255, 0.5);
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .user-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseCard = () => {
    setSelectedUser(null);
  };

  return (
    <ManageUserContainer>
      <Header>Manage Users</Header>
      <UserList>
        {users.map(user => (
          <UserItem key={user._id} onClick={() => handleUserClick(user)}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </UserItem>
        ))}
      </UserList>
      {selectedUser && (
        <React.Fragment>
          <Backdrop onClick={handleCloseCard} />
          <UserCard>
            <CloseButton onClick={handleCloseCard}>&times;</CloseButton>
            <h2>{selectedUser.name}</h2>
                        <div className="user-details">              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Role:</strong> {selectedUser.role}</p>
              <p><strong>Status:</strong> {selectedUser.status}</p>
              <p><strong>Created At:</strong> {new Date(selectedUser.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(selectedUser.updatedAt).toLocaleString()}</p>
            </div>
            <hr />
            <div>
              <h4>Accounts</h4>
              {selectedUser.accounts.length > 0 ? (
                <ul>
                  {selectedUser.accounts.map(account => (
                    <li key={account._id}>
                      <div>
                        <p><strong>Account Number:</strong> {account.accountNumber}</p>
                        <p><strong>Account Type:</strong> {account.accountType}</p>
                        <p><strong>Balance:</strong> {account.balance} {account.currency}</p>
                      </div>
                      <div>
                        <p><strong>Created At:</strong> {new Date(account.createdAt).toLocaleString()}</p>
                        <p><strong>Updated At:</strong> {new Date(account.updatedAt).toLocaleString()}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No accounts found for this user.</p>
              )}
            </div>
          </UserCard>
        </React.Fragment>
      )}
    </ManageUserContainer>
  );
};

export default ManageUser;
