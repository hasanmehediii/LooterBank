import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './common/Navbar';

const AdminLayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AdminLayout = () => {
  return (
    <AdminLayoutContainer>
      <MainContent>
        <Navbar />
        <Outlet />
      </MainContent>
    </AdminLayoutContainer>
  );
};

export default AdminLayout;
