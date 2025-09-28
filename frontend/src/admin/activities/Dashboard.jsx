import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background: #f0f2f5;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
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

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header>Activities Dashboard</Header>
      <WidgetGrid>
        <Widget>
          <h2>Total Transactions</h2>
          <p>5,432</p>
        </Widget>
        <Widget>
          <h2>Total Loan Applications</h2>
          <p>123</p>
        </Widget>
        <Widget>
          <h2>New Users This Month</h2>
          <p>45</p>
        </Widget>
        <Widget>
          <h2>Pending Issues</h2>
          <p>7</p>
        </Widget>
      </WidgetGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
