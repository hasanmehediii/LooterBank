import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const UserHomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #2c3e50;
  color: white;
  padding-top: 80px; /* Add padding to avoid overlap with Navbar */
`;

const MainContent = styled.main`
  flex-grow: 1;
  background-image: url('/images/bank_background.jpg');
  background-size: cover;
  background-position: center;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #34495e;

  a {
    color: white;
    text-decoration: none;
    display: block;

    &:hover {
      background: #34495e;
    }
  }
`;

const UserHome = () => {
  return (
    <>
      <Navbar />
      <UserHomeContainer>
        <Sidebar>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link to="/home/account">My Account</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/cashout">CashOut</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/loan-apply">Loan Apply</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/send-money">Send Money</Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
        <MainContent>
          <Outlet />
        </MainContent>
      </UserHomeContainer>
      <Footer />
    </>
  );
};

export default UserHome;
