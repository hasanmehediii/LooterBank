import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.005), rgba(230, 248, 230, 0.05)),
    url('/images/money.jpg'); 
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* align content to left */
  padding: 10rem 5rem 3rem; /* extra left padding */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #222; 
  font-weight: 700;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #444;
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.2s backwards;
  text-align: left;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.95); /* semi-transparent background */
  padding: 2.5rem;
  padding-top: 3.5rem;
  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  animation: ${fadeIn} 1s ease-out 0.4s backwards;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #28a745;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #1e7e34;
  }
`;

const Deposit = () => {
  return (
    <PageContainer>
      <Navbar />
      <Section>
        <Title>Deposit Money Request</Title>
        <Subtitle>
          At first, get a receipt ID from our offline branch or ATM machine to
          proceed with your deposit request.
        </Subtitle>
        <Form>
          <Input type="text" placeholder="Account Number" />
          <Input type="text" placeholder="Receipt ID" />
          <Input type="number" placeholder="Amount" />
          <Input type="text" placeholder="Password" />
          <Button type="submit">Deposit</Button>
        </Form>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default Deposit;
