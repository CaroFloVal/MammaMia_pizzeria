import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const calculateTotal = () => {
    return cart.reduce((acc, pizza) => acc + (pizza.price * pizza.quantity), 0);
  };

  const total = calculateTotal();

  const addToCart = (pizza) => {
    setCart(prevCart => {
      const existingPizzaIndex = prevCart.findIndex(item => item.id === pizza.id);

      if (existingPizzaIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingPizzaIndex] = {
          ...updatedCart[existingPizzaIndex],
          quantity: updatedCart[existingPizzaIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart(prevCart => prevCart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart
        .map(pizza =>
          pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity - 1 }
            : pizza
        )
        .filter(pizza => pizza.quantity > 0);

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};
