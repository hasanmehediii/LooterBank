import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Welcome from './pages/Welcome';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import UserHome from './pages/UserHome';
import UserProfile from './pages/profile/UserProfile';
import Account from './pages/features/Account';
import Transactions from './pages/features/Transactions';
import LoanApply from './pages/features/LoanApply';
import { AuthProvider } from './context/AuthContext';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <AppContainer>
      <MainContent>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/home/account" element={<Account />} />
            <Route path="/home/transactions" element={<Transactions />} />
            <Route path="/home/loan-apply" element={<LoanApply />} />
          </Routes>
        </AuthProvider>
      </MainContent>
    </AppContainer>
  );
}

export default App;