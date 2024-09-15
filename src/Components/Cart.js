import React, { useContext, useState } from "react";
import { CartContext } from "../context";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { isCartOn, setIsCartOn } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const handleCart = () => {
    setIsCartOn(!isCartOn);
  };
  const handleItemRemove = () => {
    setCartItems([]);
  };

  return (
    <div className="fixed h-[100vh] w-[100vw] top-0 left-0 flex justify-end items-center backdrop-blur-sm ">
      <div className="h-[100vh] w-[30vw]  right-0 flex flex-col bg-gray-500">
        <div className="flex flex-row justify-between bg-gray-600 p-2">
          <div>Cart</div>
          <button
            onClick={handleCart}
            className="bg-red-400 w-7 rounded-lg hover:bg-red-700 hover:text-white"
          >
            X
          </button>
        </div>
        <div className="overflow-y-auto">
          <ul>
            {cartItems.length ?(
              cartItems.map((item, index) => (
                <>
                  <li className="flex justify-between text-xl m-4" key={index}>
                    <div>
                      <img src={item.url} alt="img" className="h-28" />
                      {item.name}
                    </div>
                    ${item.price}
                  </li>
                  <hr />
                </>
              ))
            ) : (
              <p>The Cart is Empty</p>
            )}
          </ul>
        </div>
        {/* <p className="text-4xl">{cartItems}</p> */}

        {cartItems.length > 0 && (
          <div className="flex justify-around m-0 static bottom-0 bg-gray-600 w-[30vw]">
            <button
              onClick={handleItemRemove}
              className="h-10 w-auto p-3 text-lg bg-red-400 rounded-md m-2"
            >
              Remove Item
            </button>
            <button className="h-10 w-auto p-3 text-lg bg-green-400 rounded-md m-2">
              Buy ${total}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
