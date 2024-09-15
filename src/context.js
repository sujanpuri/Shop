import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);   //add states as you needed.
  const [isCartOn, setIsCartOn] = useState(false);    

  return (
    <CartContext.Provider value={{ 
      cartItems, setCartItems, 
      isCartOn, setIsCartOn
    }}>
      {children}
    </CartContext.Provider>
  );
};