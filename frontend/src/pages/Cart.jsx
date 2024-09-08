import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, ListGroup } from 'react-bootstrap';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      <ListGroup>
        {cart.map(pizza => (
          <ListGroup.Item key={pizza.id}>
            <div>
              <h4>{pizza.name}</h4>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.quantity}</p>
              <Button onClick={() => decreaseQuantity(pizza.id)}>-</Button>
              <Button onClick={() => increaseQuantity(pizza.id)}>+</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
