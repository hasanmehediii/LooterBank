import React from 'react';
import styled from 'styled-components';

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
    <FAQContainer>
      <Title>FAQ</Title>
      <p>This is the FAQ page.</p>
    </FAQContainer>
  );
};

export default FAQ;
