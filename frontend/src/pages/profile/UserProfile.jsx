import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: 100vh;
  background-image: url('/images/bank_background.jpg'); /* Using a generic background */
  background-size: cover;
  background-position: center;
  color: white;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
`;

const ProfileContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const ProfileForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Button = styled.button`
  grid-column: 1 / -1;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  margin-top: 1rem;
  grid-column: 1 / -1;
`;

const SuccessMessage = styled.p`
  color: #4CAF50;
  margin-top: 1rem;
  grid-column: 1 / -1;
`;

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    status: '',
    createdAt: '',
    updatedAt: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
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
        const res = await axios.get('https://backend-g0d7phgm7-mehedi-hasans-projects-1f9ebc78.vercel.app/api/auth/me', config);
        setUserData({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone || '',
          role: res.data.role,
          status: res.data.status,
          createdAt: res.data.createdAt ? new Date(res.data.createdAt).toLocaleString() : 'N/A',
          updatedAt: res.data.updatedAt ? new Date(res.data.updatedAt).toLocaleString() : 'N/A',
        });
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to fetch user profile. Please try again.');
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const config = {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'application/json',
        },
      };
      const updateData = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
      };
      await axios.put('https://backend-g0d7phgm7-mehedi-hasans-projects-1f9ebc78.vercel.app/api/auth/me', updateData, config);
      setSuccess('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating user profile:', err);
      setError('Failed to update profile. Please try again.');
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <Navbar />
        <ContentWrapper>
          <ProfileContainer>
            <Title>Loading Profile...</Title>
          </ProfileContainer>
        </ContentWrapper>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <ProfileContainer>
          <Title>User Profile</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <ProfileForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Role</Label>
              <Input type="text" value={userData.role} disabled />
            </FormGroup>
            <FormGroup>
              <Label>Account Status</Label>
              <Input type="text" value={userData.status} disabled />
            </FormGroup>
            <FormGroup>
              <Label>Member Since</Label>
              <Input type="text" value={userData.createdAt} disabled />
            </FormGroup>
            <FormGroup>
              <Label>Last Updated</Label>
              <Input type="text" value={userData.updatedAt} disabled />
            </FormGroup>
            <Button type="submit">Save Changes</Button>
          </ProfileForm>
        </ProfileContainer>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default UserProfile;