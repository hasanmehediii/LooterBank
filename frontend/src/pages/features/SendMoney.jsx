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
  background: linear-gradient(rgba(255, 255, 255, 0.005), rgba(240, 248, 255, 0.05)),
    url('/images/money.jpg'); /* put your image in public/images */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10rem 5rem 3rem;
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
  background: rgba(255, 255, 255, 0.95);
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
  background: #007bff;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const SendMoney = () => {
  return (
    <PageContainer>
      <Navbar />
      <Section>
        <Title>Send Money</Title>
        <Subtitle>
          Enter the recipient’s account details and amount you want to transfer.
        </Subtitle>
        <Form>
          <Input type="text" placeholder="Recipient Account Number" />
          <Input type="number" placeholder="Amount" />
          <Input type="text" placeholder="Password" />
          <Button type="submit">Send</Button>
        </Form>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default SendMoney;
