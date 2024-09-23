import React, { useContext, useEffect, useState } from "react";
import ClotheBG from "../Images/RouteBG.svg";
import { CartContext } from "../context";

const Cart = () => {
  const { cartItems, setCartItems, isCartOn, setIsCartOn } = useContext(CartContext);
  const [totalBill, setTotalBill] = useState(0);

  const handleCart = () => {
    setIsCartOn(!isCartOn);
  };

  const handleItemRemove = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + Number(item.totalPrice), 0).toFixed(2);
    setTotalBill(total);
  }, [cartItems]);

  return (
    <div className={`fixed h-full w-full top-0 left-0 flex justify-end items-center backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-black h-full w-3/4 sm:w-1/3 border-l-2 border-white rounded-l-2xl right-0 flex flex-col transform transition-transform duration-300 ease-in-out ${isCartOn ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            backgroundImage: `url(${ClotheBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div className="flex flex-row justify-between m-3 border-b-[1px] border-gray-300 pb-4">
          <div className="text-3xl">Cart</div>
          <button
            onClick={handleCart}
            className="bg-red-400 mr-4 p-1 w-[2vw] rounded-lg hover:bg-red-700 hover:text-white"
          >
            X
          </button>
        </div>
        <div className="overflow-y-auto">
          <ul>
            {cartItems.length ? (
              cartItems.map((item, index) => (
                <div className="border-b-[1px] border-gray-300" key={index}>
                  <li className="flex justify-between text-xl m-4">
                    <div className="flex">
                      <div>
                        <img src={item.url} alt="img" className="h-28 rounded-lg" />
                      </div>
                      <div className="m-3 flex flex-col justify-center">
                        <div>{item.name}</div>
                        <div className="flex justify-center items-center text-lg">
                          <p className="text-sm mr-1">Per piece: </p> ${Number(item.price).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm">
                      <div className="flex">
                        <p>Total: </p>${Number(item.totalPrice).toFixed(2)}
                      </div>
                      <div className="flex border-2 border-gray-200 h-6 w-24 justify-around">
                        <button
                          className="border-r-2 w-[25%] h-full border-gray-200 flex items-center justify-center"
                          onClick={() => {
                            if (item.count > 1) {
                              const updatedCart = cartItems.map((cartItem) =>
                                cartItem.name === item.name
                                  ? {
                                      ...cartItem,
                                      count: cartItem.count - 1,
                                      totalPrice: (cartItem.count - 1) * cartItem.price,
                                    }
                                  : cartItem
                              );
                              setCartItems(updatedCart);
                            }
                          }}
                        >
                          -
                        </button>
                        <button className="border-r-2 w-[50%] border-gray-200 flex items-center justify-center">{item.count}</button>
                        <button
                          className="w-[25%] flex items-center justify-center"
                          onClick={() => {
                            if (item.count < 100) {
                              const updatedCart = cartItems.map((cartItem) =>
                                cartItem.name === item.name
                                  ? {
                                      ...cartItem,
                                      count: cartItem.count + 1,
                                      totalPrice: (cartItem.count + 1) * cartItem.price,
                                    }
                                  : cartItem
                              );
                              setCartItems(updatedCart);
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                </div>
              ))
            ) : (
              <p>The Cart is Empty</p>
            )}
          </ul>
        </div>

        {cartItems.length > 0 && (
          <div className="bg-black bg-opacity-75 rounded-b-2xl flex justify-around m-0 fixed bottom-0 w-3/4 md:w-full">
            <button
              onClick={handleItemRemove}
              className="h-10 w-auto p-3 text-lg bg-red-400 rounded-md m-2 flex items-center justify-center"
            >
              Remove Items
            </button>
            <button className="h-10 w-auto p-3 text-lg bg-green-400 rounded-md m-2 flex items-center justify-center">
              Buy ${totalBill}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
