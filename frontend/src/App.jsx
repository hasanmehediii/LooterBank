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
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

export default App;