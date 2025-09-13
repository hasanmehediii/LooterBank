import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  background-image: url('/images/money.jpg');
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

const FAQContent = styled.div`
  max-width: 800px;
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

const FAQItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Question = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Answer = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;

  &.active {
    max-height: 200px; /* Adjust as needed */
  }
`;

const faqs = [
    {
      question: "How do I open an account?",
      answer: "You can open an account online by filling out our application form. The process is quick, easy, and secure. You will need to provide some personal information and upload a valid ID."
    },
    {
      question: "What are the requirements to apply for a loan?",
      answer: "To apply for a loan, you must be at least 18 years old, have a steady source of income, and a good credit history. Specific requirements may vary depending on the type of loan you are applying for."
    },
    {
      question: "How can I check my account balance?",
      answer: "You can check your account balance 24/7 through our online banking portal or mobile app. You can also visit any of our branches or ATMs."
    },
    {
      question: "Is my money safe with LooterBank?",
      answer: "Yes, your money is safe with us. We are a licensed and regulated financial institution, and all deposits are insured up to the maximum amount permitted by law."
    },
    {
      question: "What types of accounts do you offer?",
      answer: "We offer a variety of accounts to suit your needs, including savings accounts, checking accounts, and business accounts. Each account has different features and benefits."
    },
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. You will be asked to provide your email address, and we will send you a link to reset your password."
    },
    {
      question: "Can I access my account from anywhere?",
      answer: "Yes, you can access your account from anywhere in the world through our online banking portal or mobile app. All you need is an internet connection."
    },
    {
      question: "What are your customer service hours?",
      answer: "Our customer service team is available 24/7 to assist you with any questions or concerns you may have. You can reach us by phone, email, or live chat."
    },
    {
      question: "Do you offer mobile banking?",
      answer: "Yes, we have a mobile app for both iOS and Android devices. You can download it from the App Store or Google Play Store."
    },
    {
      question: "How do I report a lost or stolen card?",
      answer: "If your card is lost or stolen, please contact us immediately at our 24/7 support number. We will cancel your card and issue you a new one."
    },
    {
      question: "What is the interest rate on savings accounts?",
      answer: "The interest rate on our savings accounts varies depending on the account type and balance. Please visit our website or contact us for the latest rates."
    },
    {
      question: "Can I apply for a credit card online?",
      answer: "Yes, you can apply for a credit card online through our website. The application process is simple and secure."
    },
    {
      question: "How long does it take to get a loan approved?",
      answer: "The loan approval process typically takes 1-3 business days. However, it may take longer depending on the complexity of your application."
    },
    {
      question: "Do you have any branches near me?",
      answer: "You can find a list of all our branches on our website. We have branches in most major cities."
    },
    {
      question: "How do I close my account?",
      answer: "To close your account, please visit one of our branches or contact our customer service team. We will guide you through the process."
    }
  ];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <FAQContent>
          <Title>Frequently Asked Questions</Title>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </Question>
              <Answer className={activeIndex === index ? 'active' : ''}>
                {faq.answer}
              </Answer>
            </FAQItem>
          ))}
        </FAQContent>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default FAQ;
