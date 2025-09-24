import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Transactions from './features/Transactions';
import LoanApply from './features/LoanApply';
import Deposit from './features/Deposit';
import SendMoney from './features/SendMoney';
import Cashout from './features/Cashout';
import Footer from '../common/Footer';
import { FaTachometerAlt, FaUniversity, FaExchangeAlt, FaPiggyBank, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

// ======== CONTAINER STYLES ========
const UserHomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background: #f4f6fc;
  padding-top: 100px
`;

const Sidebar = styled.div`
  width: 260px;
  background: #007bff;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1000;
    transform: translateX(-100%);
    &.active {
      transform: translateX(0);
    }
  }
`;

const SidebarHeader = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.2);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const SidebarMenuItem = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      background: rgba(255,255,255,0.15);
      border-radius: 8px;
    }

    svg {
      margin-right: 1rem;
    }
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 6rem 3rem 3rem 3rem;
  min-height: 100vh;

  /* Fixed background image */
  background: url('/images/money.jpg') no-repeat center right;
  background-size: cover;
  background-attachment: fixed;

  /* White overlay effect */
  position: relative;
  z-index: 1;
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8); /* adjust opacity */
    z-index: -1;
  }
`;


const WelcomeHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const WelcomeTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  color: #555;
`;

// ======== METRICS ========
const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MetricCard = styled.div`
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
  }
`;

const MetricTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5rem;
`;

const MetricValue = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #007bff;
`;

// ======== COMPONENT ========
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
                <FaTachometerAlt /> Dashboard
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/transactions">
                <FaExchangeAlt /> Transactions
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/loan-apply">
                <FaPiggyBank /> Apply for Loan
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/cashout">
                <FaPiggyBank /> Cashout
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/deposit">
                <FaPiggyBank /> Deposit
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link to="/home/send-money">
                <FaUserCircle /> Send Money
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
              <MetricValue>
                {user && user.account ? `${user.account.balance} ${user.account.currency}` : 'Loading...'}
              </MetricValue>
            </MetricCard>
            <MetricCard>
              <MetricTitle>Account Number</MetricTitle>
              <MetricValue>
                {user && user.account ? user.account.accountNumber : 'Loading...'}
              </MetricValue>
            </MetricCard>
            <MetricCard>
              <MetricTitle>Account Type</MetricTitle>
              <MetricValue>
                {user && user.account ? user.account.accountType : 'Loading...'}
              </MetricValue>
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
