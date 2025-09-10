import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px);
`;

const LoginForm = styled.form`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpLink = styled.p`
  text-align: center;
  margin-top: 1rem;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(user);

      const res = await axios.post('http://localhost:5000/api/auth/login', body, config);

      console.log(res.data); // Token
      // You would typically store the token in localStorage and redirect the user
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={onSubmit}>
        <Title>Login</Title>
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
        <Button type="submit">Login</Button>
        <SignUpLink>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </SignUpLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
