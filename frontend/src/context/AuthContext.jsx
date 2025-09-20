import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user info using token (used on page reload)
  const fetchUser = useCallback(async (authToken) => {
    setLoading(true);
    try {
      const res = await axios.get('looter-bank-472gv7p05-mehedi-hasans-projects-1f9ebc78.vercel.app/api/auth/me', {
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
    } finally {
      setLoading(false);
    }
  }, []);

  // Load token and user from localStorage on app start
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else if (storedToken) {
      // If only token is present, fetch user data
      fetchUser(storedToken);
    } else {
      setLoading(false);
    }
  }, [fetchUser]);

  // Login function
  const login = async ({ identifier, accountNumber, password }) => {
    try {
const res = await axios.post('looter-bank-472gv7p05-mehedi-hasans-projects-1f9ebc78.vercel.app/api/auth/login', {
        identifier,
        accountNumber,
        password,
      });

      const newToken = res.data.token;
      const loggedInUser = res.data.user;

      // Save token and user in state and localStorage
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setToken(newToken);
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
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
