import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);   //add states as you needed.
  const [isCartOn, setIsCartOn] = useState(false);    
  const [itemOn, setItemOn] = useState(false);
  const [itemDetails, setitemDetails] = useState([])

  return (
    <CartContext.Provider value={{ 
      cartItems, setCartItems, 
      isCartOn, setIsCartOn,
      itemOn, setItemOn,
      itemDetails, setitemDetails
    }}>
      {children}
    </CartContext.Provider>
  );
};