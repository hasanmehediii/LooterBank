import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const ContactContainer = styled.div`
  padding: 2rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactContainer>
        <Title>Contact</Title>
        <p>This is the Contact page.</p>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;
