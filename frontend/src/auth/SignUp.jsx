import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('/images/money.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 3rem;
`;

const SignUpCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 800px;
  padding-top: 8rem;
  padding: 3rem;
  max-width: 90%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
`;

const Select = styled.select`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  background-color: white;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  grid-column: 1 / -1;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  grid-column: 1 / -1;
  margin-bottom: 1rem;
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  grid-column: 1 / -1;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    accountType: 'savings',
    initialBalance: 0,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { name, email, password, password2, phone, accountType, initialBalance } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError('Passwords do not match');
    } else {
      const newUser = {
        name,
        email,
        password,
        phone,
        accountType,
        initialBalance: parseFloat(initialBalance),
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post('https://backend-g0d7phgm7-mehedi-hasans-projects-1f9ebc78.vercel.app/api/auth/signup', body, config);

        localStorage.setItem('token', res.data.token);
        alert(`Sign up successful! Your new account number is: ${res.data.accountNumber}`);
        navigate('/home');
      } catch (err) {
        setError(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <Navbar />
      <SignUpContainer>
        <SignUpCard>
          <Title>Create Your Account</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
              required
            />
            <Input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={onChange}
            />
            <Select name="accountType" value={accountType} onChange={onChange}>
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
            </Select>
            <Input
              type="number"
              placeholder="Initial Balance"
              name="initialBalance"
              value={initialBalance}
              onChange={onChange}
              min="0"
            />
            <Button type="submit">Sign Up</Button>
            <LoginLink>
              Already have an account? <Link to="/login">Login</Link>
            </LoginLink>
          </Form>
        </SignUpCard>
      </SignUpContainer>
      <Footer />
    </>
  );
};

export default SignUp;
