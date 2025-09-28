import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background: #222;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #ffd700;
  }
`;

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear the auth token here
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <Logo>LooterBank Admin</Logo>
      <NavLinks>
        <NavLink onClick={() => navigate('/admin/dashboard')}>Dashboard</NavLink>
        <NavLink onClick={() => navigate('/admin/users')}>Users</NavLink>
        <NavLink onClick={() => navigate('/admin/transactions')}>Transactions</NavLink>
        <NavLink onClick={() => navigate('/admin/settings')}>Settings</NavLink>
        <NavLink onClick={handleLogout}>Logout</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;