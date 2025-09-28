import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  padding: 2rem;
  background: #f0f2f5;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

const SettingsForm = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  background: #1a237e;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: #0d155a;
  }
`;

const Settings = () => {
  return (
    <SettingsContainer>
      <Header>Settings</Header>
      <SettingsForm>
        <FormGroup>
          <label htmlFor="siteName">Site Name</label>
          <input type="text" id="siteName" defaultValue="LooterBank" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="adminEmail">Admin Email</label>
          <input type="email" id="adminEmail" defaultValue="admin@looterbank.com" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="maintenanceMode">Maintenance Mode</label>
          <input type="checkbox" id="maintenanceMode" />
        </FormGroup>
        <Button>Save Settings</Button>
      </SettingsForm>
    </SettingsContainer>
  );
};

export default Settings;
