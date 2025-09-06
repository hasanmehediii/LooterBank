import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 140px); // Adjust height to account for navbar and footer
  text-align: left;
  color: white;
  padding-left: 5rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: -webkit-linear-gradient(45deg, #02274eff, #310052ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  background: -webkit-linear-gradient(45deg, #150125ff, #1a013bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Welcome = () => {
  return (
    <WelcomeContainer>
      <Title>LooterBank</Title>
      <Subtitle>Your trusted partner in finance.<br /> Secure, fast, and reliable.</Subtitle>
    </WelcomeContainer>
  );
};

export default Welcome;
