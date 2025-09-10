import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const FAQContainer = styled.div`
  padding: 2rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const FAQ = () => {
  return (
    <>
      <Navbar />
      <FAQContainer>
        <Title>FAQ</Title>
        <p>This is the FAQ page.</p>
      </FAQContainer>
      <Footer />
    </>
  );
};

export default FAQ;
