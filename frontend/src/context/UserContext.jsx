import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Método para login
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        console.error('Error during login', data.message);
      }
    } catch (error) {
      console.error('Login request failed', error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
      } else {
        console.error('Error during registration', data.message);
      }
    } catch (error) {
      console.error('Register request failed', error);
    }
  };


  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,  
        },
      });

      const data = await response.json();
      if (response.ok) {
        return data;  
      } else {
        console.error('Error fetching profile', data.message);
      }
    } catch (error) {
      console.error('Profile request failed', error);
    }
  };


  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
