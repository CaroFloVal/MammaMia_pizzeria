import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';

export default function CardPizza({ id, name, price, img, ingredients }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, img });
  };

  return (
    <Card style={{ width: '18rem', height: '100%' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className="text-center">Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item>Precio: ${price}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-between">
        <Button variant="light">Ver más</Button>
        <Button variant="dark" onClick={handleAddToCart}>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}
