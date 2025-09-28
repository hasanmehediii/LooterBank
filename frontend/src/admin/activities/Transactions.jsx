import React from 'react';
import styled from 'styled-components';

const TransactionsContainer = styled.div`
  padding: 2rem;
  background: #f0f2f5;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  th, td {
    padding: 1rem;
    text-align: left;
  }

  th {
    background: #1a237e;
    color: white;
    font-weight: 600;
  }

  tbody tr:nth-child(even) {
    background: #f9f9f9;
  }
`;

const transactions = [
  { id: 1, user: 'John Doe', amount: 100, type: 'Deposit', date: '2025-09-28' },
  { id: 2, user: 'Jane Smith', amount: 50, type: 'Withdrawal', date: '2025-09-27' },
  { id: 3, user: 'Peter Jones', amount: 200, type: 'Transfer', date: '2025-09-26' },
  { id: 4, user: 'Mary Williams', amount: 150, type: 'Deposit', date: '2025-09-25' },
];

const Transactions = () => {
  return (
    <TransactionsContainer>
      <Header>Transactions</Header>
      <TransactionTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.user}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </TransactionTable>
    </TransactionsContainer>
  );
};

export default Transactions;
