import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  padding: 2rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>About Us</Title>
      <p>This is the About Us page.</p>
    </AboutUsContainer>
  );
};

export default AboutUs;
