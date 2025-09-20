import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LoginContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/money.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 3rem;
`;

const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 2rem;
  font-weight: 700;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  label {
    margin: 0 1rem;
    font-weight: 600;
    color: #555;
  }

  input[type='radio'] {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ForgotPasswordLink = styled(Link)`
  display: block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpText = styled.p`
  margin-top: 1.5rem;
  color: #555;
`;

const SignUpLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;

const Login = () => {
  const [role, setRole] = useState('user'); // keep radio if you want admin login later
  const [identifier, setIdentifier] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // For user, include accountNumber; for admin, omit it
      const success = await login({
        identifier,
        accountNumber: role === 'user' ? accountNumber : undefined,
        password,
      });

      if (success) {
        navigate('/home');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <PageContainer>
      <Navbar />
      <LoginContainer>
        <LoginCard>
          <Title>Login</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <RadioGroup>
            <label>
              <input
                type="radio"
                value="user"
                checked={role === 'user'}
                onChange={(e) => setRole(e.target.value)}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={role === 'admin'}
                onChange={(e) => setRole(e.target.value)}
              />
              Admin
            </label>
          </RadioGroup>

          <InputGroup>
            <Label htmlFor="identifier">Email or Phone</Label>
            <Input
              type="text"
              id="identifier"
              placeholder="Enter your email or phone"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </InputGroup>

          {role === 'user' && (
            <InputGroup>
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                type="text"
                id="accountNumber"
                placeholder="Enter your account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </InputGroup>
          )}

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <Button onClick={handleSubmit}>Login</Button>

          <ForgotPasswordLink to="/forgetpass">Forgot Password?</ForgotPasswordLink>
          <SignUpText>
            Don't have an account? <SignUpLink to="/signup">Sign Up</SignUpLink>
          </SignUpText>
        </LoginCard>
      </LoginContainer>
      <Footer />
    </PageContainer>
  );
};

export default Login;
