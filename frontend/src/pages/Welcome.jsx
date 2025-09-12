import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaShieldAlt, FaUserFriends, FaUniversity } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WelcomePageContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Changed to flex-start */
  height: 100vh;
  background-image: url('/images/money.jpg'); /* Changed background image */
  background-size: cover;
  background-position: center;
  color: #333; /* Changed text color */
  text-align: left; /* Changed text-align */
  padding: 0 5rem; /* Increased padding */
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.5s;
  animation-fill-mode: backwards;
  max-width: 600px; /* Added max-width */
`;

const CTAButton = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background: #007bff;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.3s ease;
  animation: ${fadeIn} 1s ease-out 1s;
  animation-fill-mode: backwards;

  &:hover {
    background: #0056b3;
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  max-width: 300px;
  margin: 1rem;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Welcome = () => {
  return (
    <WelcomePageContainer>
      <Navbar />
      <HeroSection>
        <HeroTitle>LooterBank</HeroTitle>
        <HeroSubtitle>High chance to loss your money because we can not give you any gurranty</HeroSubtitle>
        <CTAButton to="/signup">Open an Account</CTAButton>
      </HeroSection>
      <FeaturesSection>
        <SectionTitle>Why Choose LooterBank?</SectionTitle>
        <FeaturesContainer>
          <FeatureCard>
            <FeatureIcon><FaShieldAlt /></FeatureIcon>
            <FeatureTitle>Rock-Solid Security</FeatureTitle>
            <FeatureText>Your funds and data are protected by industry-leading security measures.</FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon><FaUserFriends /></FeatureIcon>
            <FeatureTitle>Customer-First Approach</FeatureTitle>
            <FeatureText>We prioritize your needs with 24/7 support and personalized services.</FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon><FaUniversity /></FeatureIcon>
            <FeatureTitle>Modern Banking</FeatureTitle>
            <FeatureText>Enjoy a seamless digital experience with our intuitive online and mobile banking.</FeatureText>
          </FeatureCard>
        </FeaturesContainer>
      </FeaturesSection>
      <Footer />
    </WelcomePageContainer>
  );
};

export default Welcome;