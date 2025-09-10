import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px);
  padding-top: 140px;
`;

const SignUpForm = styled.form`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  color: white;
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  grid-column: 1 / -1;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  grid-column: 1 / -1;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  grid-column: 1 / -1;
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    address: '',
    dob: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { name, email, password, password2, phone, address, dob } = formData;

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
        address,
        dob,
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post('http://localhost:5000/api/auth/register', body, config);

        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        navigate('/login');
      } catch (err) {
        setError(err.response.data.msg);
      }
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={onSubmit}>
        <Title>Sign Up</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
        <Input
          type="text"
          placeholder="Address"
          name="address"
          value={address}
          onChange={onChange}
        />
        <Input
          type="date"
          placeholder="Date of Birth"
          name="dob"
          value={dob}
          onChange={onChange}
        />
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
