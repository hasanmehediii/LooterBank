import React from 'react';
import styled from 'styled-components';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const AdminHome = () => {
  return (
    <AdminContainer>
      <Title>Welcome, Admin!</Title>
      {/* Add more admin-specific components and features here */}
    </AdminContainer>
  );
};

export default AdminHome;
