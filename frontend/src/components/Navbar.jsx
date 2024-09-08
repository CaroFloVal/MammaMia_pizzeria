import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { CartContext } from '../context/CartContext'; 

const NavbarPizza = () => {
  const { total } = useContext(CartContext); 
  const token = false;

  return (
    <>
      <Navbar style={{ width: '100%' }} className="barra d-flex" bg="dark" variant="dark">
        <Container className="d-flex">
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto d-flex">
            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                <Nav.Link as={Link} to="/logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <Nav.Link className="ml-auto" as={Link} to="/cart">
              🛒 Total: ${total.toLocaleString()}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPizza;
