import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    fetch('http://localhost:5000/api/pizzas/p001')
      .then(response => response.json())
      .then(data => {
        setPizza(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching pizza:', error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!pizza) {
    return <p>No se pudo cargar la pizza</p>; 
  }

  return (
    <Container>
      <Row className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6}>
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1>{pizza.name}</h1>
          <h3>Precio: ${pizza.price}</h3>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
          <p>{pizza.desc}</p>
          <Button variant="primary">Añadir al carrito</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Pizza;