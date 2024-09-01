import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './NotFound.css'; 

function NotFound() {
  return (
    <Container className="text-center not-found">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1>404 - Página no encontrada</h1>
          <p>Upps! Lo sentimos, la página que buscas no existe. </p>
          <Link to="/">
            <Button variant="info" className="back-button">Volver al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
