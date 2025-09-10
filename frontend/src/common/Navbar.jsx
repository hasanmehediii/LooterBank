import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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

const UserMenu = styled.div`
  position: relative;
  cursor: pointer;
`;

const UserName = styled.span`
  font-size: 1.2rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #2c3e50;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  min-width: 160px;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: white;

  &:hover {
    background-color: #34495e;
  }
`;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const config = {
            headers: {
              'x-auth-token': token,
            },
          };
          const res = await axios.get('http://localhost:5000/api/users/me', config);
          setUserName(res.data.name);
          setIsLoggedIn(true);
        } catch (err) {
          console.error(err);
          localStorage.removeItem('token');
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/user-profile');
    setShowDropdown(false);
  };

  return (
    <Nav>
      <Logo to="/">LooterBank</Logo>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        {isLoggedIn ? (
          <UserMenu onClick={() => setShowDropdown(!showDropdown)}>
            <UserName>{userName}</UserName>
            {showDropdown && (
              <DropdownMenu>
                <DropdownItem onClick={handleProfileClick}>User Profile</DropdownItem>
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            )}
          </UserMenu>
        ) : (
          <Button to="/login">Login / SignUp</Button>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
