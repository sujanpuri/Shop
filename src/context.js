import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);   //add states as you needed.
  const [isCartOn, setIsCartOn] = useState(false);    
  const [itemOn, setItemOn] = useState(false);
  const [itemDetails, setitemDetails] = useState([])
  const [selectedItem, setSelectedItem] = useState("all")
  const [itemCount, setItemCount] = useState(0);
  const [totalBill, settotalBill] = useState(0);
  const [searchedData, setSearchedData] = useState()
  const [apiData, setApiData] = useState([])

  return (
    <CartContext.Provider value={{ 
      cartItems, setCartItems, 
      isCartOn, setIsCartOn,
      itemOn, setItemOn,
      itemDetails, setitemDetails,
      selectedItem, setSelectedItem,
      itemCount, setItemCount,
      totalBill, settotalBill,
      searchedData, setSearchedData,
      apiData, setApiData
    }}>
      {children}
    </CartContext.Provider>
  );
};