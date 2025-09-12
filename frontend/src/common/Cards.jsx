import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  opacity: ${props => (props.inView ? 1 : 0)};
  transform: ${props => (props.inView ? 'translateX(0)' : 'translateX(-50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${props => props.delay};
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-right: 2rem;
  width: 200px;
`;

const CardNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 1rem;
`;

const CardLabel = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  max-width: 400px;
`;

const InfoCard = ({ number, label, text, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <CardContainer ref={ref} inView={inView} delay={delay}>
      <Card>
        <CardNumber>{number}</CardNumber>
        <CardLabel>{label}</CardLabel>
      </Card>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default InfoCard;
