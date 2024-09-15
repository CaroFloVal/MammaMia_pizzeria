import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarPizza from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';  
import { UserProvider, UserContext } from './context/UserContext';  
import PrivateRoute from './components/PrivateRoute';  

function App() {
  const RedirectAuthenticated = ({ children }) => {
    const { token } = useContext(UserContext);

    if (token) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <NavbarPizza />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/register" 
              element={
                <RedirectAuthenticated>
                  <Register />
                </RedirectAuthenticated>
              } 
            />
            <Route 
              path="/login" 
              element={
                <RedirectAuthenticated>
                  <Login />
                </RedirectAuthenticated>
              } 
            />
            <Route path="/cart" element={<Cart />} />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
