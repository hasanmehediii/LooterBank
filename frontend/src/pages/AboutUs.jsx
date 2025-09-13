import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  background-image: url('/images/bank_background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  padding-top: 7rem;
  background: rgba(0, 0, 0, 0.6);
`;

const AboutUsContent = styled.div`
  max-width: 1200px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <AboutUsContent>
          <Title>About LooterBank</Title>
          <TextContainer>
            <p>
              Welcome to LooterBank, where your financial security is our top priority. 
              We are a leading financial institution committed to providing innovative banking solutions and exceptional customer service. 
              Our mission is to empower our clients to achieve their financial goals by offering a wide range of products and services tailored to their unique needs.
            </p>
            <p>
              Founded in 2024, LooterBank has quickly grown to become a trusted partner for individuals and businesses alike. 
              Our team of experienced professionals is dedicated to upholding the highest standards of integrity and professionalism. 
              We believe in building long-term relationships with our clients based on trust, transparency, and mutual respect.
            </p>
          </TextContainer>
        </AboutUsContent>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default AboutUs;
