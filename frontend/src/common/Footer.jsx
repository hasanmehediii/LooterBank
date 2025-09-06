import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 LooterBank. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
