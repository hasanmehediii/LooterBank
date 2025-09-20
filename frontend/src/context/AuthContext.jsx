import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Fetch user info using token (used on page reload)
  const fetchUser = useCallback(async (authToken) => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          'x-auth-token': authToken, // ✅ must match backend middleware
        },
      });
      setUser(res.data);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      setUser(null);
      setToken(null);
      localStorage.removeItem('token');
    }
  }, []);

  // Load token from localStorage on app start
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
    }
  }, [fetchUser]);

  // Login function
  const login = async ({ identifier, accountNumber, password }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        identifier,
        accountNumber,
        password,
      });

      const newToken = res.data.token;
      const loggedInUser = res.data.user;

      // Save token in state and localStorage
      localStorage.setItem('token', newToken);
      setToken(newToken);

      // Save user in state
      setUser(loggedInUser);

      return true;
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
