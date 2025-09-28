import React from 'react';
import styled from 'styled-components';
import Navbar from './common/Navbar';

const AdminHomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  padding-top: 3rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
  }
  p {
    color: #777;
    font-size: 1.2rem;
  }
`;

const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Widget = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    font-size: 2rem;
    font-weight: 700;
    color: #1a237e;
  }
`;

const AdminHome = () => {
  return (
    <AdminHomeContainer>
      <MainContent>
        <Navbar />
        <Header>
          <h1>Admin Dashboard</h1>
          <p>Welcome back, Admin! Here's a summary of your application.</p>
        </Header>
        <WidgetGrid>
          <Widget>
            <h2>Total Users</h2>
            <p>1,234</p>
          </Widget>
          <Widget>
            <h2>Pending Approvals</h2>
            <p>56</p>
          </Widget>
          <Widget>
            <h2>Total Transactions</h2>
            <p>$5,678,901</p>
          </Widget>
          <Widget>
            <h2>Open Tickets</h2>
            <p>12</p>
          </Widget>
        </WidgetGrid>
      </MainContent>
    </AdminHomeContainer>
  );
};

export default AdminHome;