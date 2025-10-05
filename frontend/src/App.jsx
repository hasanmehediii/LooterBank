import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Welcome from './pages/Welcome';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import UserHome from './pages/UserHome';
import UserProfile from './pages/profile/UserProfile';
import Deposit from './pages/features/Deposit';
import SendMoney from './pages/features/SendMoney';
import Cashout from './pages/features/Cashout';
import Transactions from './pages/features/Transactions';
import LoanApply from './pages/features/LoanApply';
import AdminHome from './admin/AdminHome';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AdminLayout from './admin/AdminLayout';
import ManageUser from './admin/activities/ManageUser';
import AdminDashboard from './admin/activities/Dashboard';
import AdminTransactions from './admin/activities/Transactions';
import AdminSettings from './admin/activities/Settings';
import ManageLoans from './admin/activities/ManageLoans';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

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
            <Route path="/home" element={<ProtectedRoute><UserHome /></ProtectedRoute>} />
            <Route path="/user-profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
            <Route path="/home/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
            <Route path="/home/loan-apply" element={<ProtectedRoute><LoanApply /></ProtectedRoute>} />
            <Route path="/home/deposit" element={<ProtectedRoute><Deposit /></ProtectedRoute>} />
            <Route path="/home/send-money" element={<ProtectedRoute><SendMoney /></ProtectedRoute>} />
            <Route path="/home/cashout" element={<ProtectedRoute><Cashout /></ProtectedRoute>} />


            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<ManageUser />} />
              <Route path="transactions" element={<AdminTransactions />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="loans" element={<ManageLoans />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </MainContent>
    </AppContainer>
  );
}

export default App;