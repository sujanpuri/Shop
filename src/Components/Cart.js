import React, { useContext, useEffect, useState } from "react"; 
import ClotheBG from "../Images/RouteBG.svg";
import { IoCloseSharp } from "react-icons/io5";
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
      <div className={`bg-black h-full w-[95%] md:w-[40%] ml-[5%] border-l-2 border-white rounded-l-2xl right-0 flex flex-col transform transition-transform duration-300 ease-in-out ${isCartOn ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-row justify-between m-3 border-b-[1px] border-gray-300 pb-4">
          <div className="text-2xl">Cart</div> {/* Reduced text size */}
          <IoCloseSharp 
            onClick={handleCart}
            className="bg-red-400 mr-1 w-7 md:mr-2 h-8 md:w-8 p-1 rounded-lg hover:bg-red-700 hover:text-white"/>
        </div>
        <div className="overflow-y-auto"
          style={{
            backgroundImage: `url(${ClotheBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <ul>
            {cartItems.length ? (
              cartItems.map((item, index) => (
                <div className="border-b-[1px] border-gray-300 mb-14" key={index}>
                  <li className="flex justify-between text-base m-4"> {/* Reduced text size */}
                    <div className="flex">
                      <div>
                        <img src={item.url} alt="img" className="h-20 w-20 md:h-40 md:w-40 rounded-lg object-cover" /> {/* Increased image size */}
                      </div>
                      <div className="m-3 flex flex-col justify-center">
                        <div className="text-sm md:text-base">{item.name}</div> {/* Reduced text size */}
                        <div className="flex justify-center items-center text-sm md:text-base">
                          <p className="text-xs mr-1">Per piece: </p> ${Number(item.price).toFixed(2)} {/* Reduced text size */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm md:text-base">
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
              <p className="text-sm">The Cart is Empty</p>
            )}
          </ul>
        </div>

        {cartItems.length > 0 && (
          <div className="bg-black bg-opacity-75 rounded-bl-2xl md:rounded-b-2xl flex justify-around m-0 fixed bottom-0 w-full md:w-full">
            <button
              onClick={handleItemRemove}
              className="h-8 w-auto p-2 text-sm md:text-base bg-red-400 rounded-md m-2 flex items-center justify-center"
            >
              Remove Items
            </button>
            <button className="h-8 w-auto p-2 text-sm md:text-base bg-green-400 rounded-md m-2 flex items-center justify-center">
              Buy ${totalBill}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
