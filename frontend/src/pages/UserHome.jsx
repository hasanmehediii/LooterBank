import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaTachometerAlt, FaUniversity, FaExchangeAlt, FaPiggyBank, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const UserHomeContainer = styled.div`
  display: flex;
  padding-top: 6rem;
  min-height: 100vh;
  background: #e9e4ffff;
  font-family: 'Poppins', sans-serif;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #e9e4ffff;
  color: #333;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;
`;

const SidebarHeader = styled.div`
  padding: 0.5rem;
  padding-top: 7rem;
  text-align: center;
  border-bottom: 1px solid #ffdbdbff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding-bottom: 1rem;
  padding: 1rem 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    color: #555;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: #f0f7ff;
      color: #007bff;
    }

    svg {
      margin-right: 1rem;
    }
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
  padding-top: 6rem; /* Adjusted to match Navbar height */
  overflow-x: hidden; /* Prevent horizontal overflow */
  background-image: url('/images/bank_background.jpg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

const WelcomeHeader = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const WelcomeTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fbffc5ff;
`;

const WelcomeSubtitle = styled.p`
  font-size: 1rem;
  padding-top: 0.5rem;
  color: #ccff00ad;
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
`;

const MetricTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #777;
  margin-bottom: 0.5rem;
`;

const MetricValue = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
`;

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <UserHomeContainer>
        <Sidebar>
          <SidebarHeader>
            <Logo>LooterBank</Logo>
          </SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link to="/home">
                <FaTachometerAlt />
                Dashboard
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/account">
                <FaUniversity />
                Accounts
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/transactions">
                <FaExchangeAlt />
                Transactions
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/loan-apply">
                <FaPiggyBank />
                Loans
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/user-profile">
                <FaUserCircle />
                Profile
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
        <MainContent>
          <WelcomeHeader>
            <WelcomeTitle>Welcome back, {user ? user.name : 'User'}!</WelcomeTitle>
            <WelcomeSubtitle>Here's a summary of your account.</WelcomeSubtitle>
          </WelcomeHeader>
          <MetricsContainer>
            <MetricCard>
              <MetricTitle>Current Balance</MetricTitle>
              <MetricValue>{user && user.account ? `${user.account.balance} ${user.account.currency}` : 'Loading...'}</MetricValue>
            </MetricCard>
            <MetricCard>
              <MetricTitle>Account Number</MetricTitle>
              <MetricValue>{user && user.account ? user.account.accountNumber : 'Loading...'}</MetricValue>
            </MetricCard>
            <MetricCard>
              <MetricTitle>Account Type</MetricTitle>
              <MetricValue>{user && user.account ? user.account.accountType : 'Loading...'}</MetricValue>
            </MetricCard>
          </MetricsContainer>
          <Outlet />
        </MainContent>
      </UserHomeContainer>
      <Footer />
    </>
  );
};

export default UserHome;
