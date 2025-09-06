import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: absolute; /* Make it float */
  top: 20px; /* Distance from top */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
  width: 90%; /* Adjust width as needed */
  max-width: 1200px; /* Max width for larger screens */
  border-radius: 15px; /* Rounded corners */
  z-index: 1000; /* Ensure it's above other content */
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;

  &:hover {
    color: #ddd;
  }
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  margin-left: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">LooterBank</Logo>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <Button to="/login">Login / SignUp</Button>
      </div>
    </Nav>
  );
};

export default Navbar;
