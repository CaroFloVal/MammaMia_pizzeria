import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';  
import { Button, ListGroup, Alert } from 'react-bootstrap'; 

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total, clearCart } = useContext(CartContext); 
  const { token } = useContext(UserContext);  
  const [message, setMessage] = useState(''); 

  
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ cart }) 
      });

      if (!response.ok) {
        throw new Error('Error en la compra');
      }

      
      setMessage('¡Compra realizada con éxito!');
      clearCart(); 
    } catch (error) {
      setMessage('Hubo un problema con la compra. Intenta de nuevo.');
    }
  };

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
      
      {/* Mostrar el mensaje de éxito o error */}
      {message && <Alert variant={message.includes('éxito') ? 'success' : 'danger'}>{message}</Alert>}

      <Button 
        variant="primary" 
        onClick={handleCheckout} 
        disabled={!token || cart.length === 0}  
      >
        Pagar
      </Button>
    </div>
  );
};

export default Cart;
