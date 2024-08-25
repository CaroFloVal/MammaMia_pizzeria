import React, { useState } from 'react';
import { pizzaCart } from '../assets/JS/pizzas.js';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(pizza => {
      if (pizza.id === id) {
        return { ...pizza, quantity: pizza.quantity + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map(pizza => {
        if (pizza.id === id) {
          const newQuantity = pizza.quantity - 1;
          if (newQuantity <= 0) {
            return null; 
          }
          return { ...pizza, quantity: newQuantity };
        }
        return pizza;
      })
      .filter(pizza => pizza !== null); 
  
    setCart(updatedCart);
  };
 
  const total = cart.reduce((acc, pizza) => acc + (pizza.price * pizza.quantity), 0);

  const botonPagar= () => {
    console.log('Pagar clicked');
  };

  return (
    <div className="cart-container">
      {cart.map(pizza => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: 'auto' }} />
          <h3>{pizza.name}</h3>
          <p>Precio: ${pizza.price}</p>
          <p>Cantidad: {pizza.quantity}</p>
          <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
          <button onClick={() => increaseQuantity(pizza.id)}>+</button>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Total: ${total}</h2>
        <button onClick={botonPagar}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;