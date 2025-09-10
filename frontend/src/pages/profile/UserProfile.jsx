import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
`;

const ProfileCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProfileDetail = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        const res = await axios.get('http://localhost:5000/api/users/me', config);
        setUserData(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch user profile.');
        setLoading(false);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) {
    return (
      <UserProfileContainer>
        <Navbar />
        <ProfileCard>
          <Title>Loading Profile...</Title>
        </ProfileCard>
        <Footer />
      </UserProfileContainer>
    );
  }

  if (error) {
    return (
      <UserProfileContainer>
        <Navbar />
        <ProfileCard>
          <Title>Error: {error}</Title>
        </ProfileCard>
        <Footer />
      </UserProfileContainer>
    );
  }

  return (
    <UserProfileContainer>
      <Navbar />
      <ProfileCard>
        <Title>User Profile</Title>
        {userData && (
          <>
            <ProfileDetail><strong>Name:</strong> {userData.name}</ProfileDetail>
            <ProfileDetail><strong>Email:</strong> {userData.email}</ProfileDetail>
            <ProfileDetail><strong>Phone:</strong> {userData.profile.phone}</ProfileDetail>
            <ProfileDetail><strong>Address:</strong> {userData.profile.address}</ProfileDetail>
            <ProfileDetail><strong>Date of Birth:</strong> {userData.profile.dob}</ProfileDetail>
            <ProfileDetail><strong>Status:</strong> {userData.status}</ProfileDetail>
            <ProfileDetail><strong>MFA Enabled:</strong> {userData.mfaEnabled ? 'Yes' : 'No'}</ProfileDetail>
            <ProfileDetail><strong>Last Login:</strong> {new Date(userData.lastLogin).toLocaleString()}</ProfileDetail>
            <ProfileDetail><strong>Member Since:</strong> {new Date(userData.createdAt).toLocaleDateString()}</ProfileDetail>
          </>
        )}
      </ProfileCard>
      <Footer />
    </UserProfileContainer>
  );
};

export default UserProfile;
