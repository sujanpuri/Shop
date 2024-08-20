import React from "react";

const Cart = () => {
  return (
    <div className="fixed h-[90vh] w-[100vw] top-16 left-0 flex flex-col justify-center items-center backdrop-blur-sm z-100">
      <div className="h-[80vh] w-[80vw] rounded-lg flex flex-col items-center bg-gray-500">
        <div className="flex flex-row justify-between bg-gray-600">
          <div>Here are some of the items that you have kept in the cart:</div>
          <button onClick={null} className="bg-red-400 hover:bg-red-700 hover:text-white">
            X
          </button>
        </div>
        <div className="bg-white w-full text-black flex justify-between">
          <div>name</div>
          <div>item1 image</div>
          <div>item1 name</div>
          <div>price</div>
        </div>
        <div className="bg-white w-full text-black flex justify-between">
          <div>name</div>
          <div>item1 image</div>
          <div>item1 name</div>
          <div>price</div>
        </div>
        <div className="bg-white w-full text-black flex justify-between">
          <div>name</div>
          <div>item1 image</div>
          <div>item1 name</div>
          <div>price</div>
        </div>
        <div className="bg-white w-full text-black flex justify-between">
          <div>name</div>
          <div>item1 image</div>
          <div>item1 name</div>
          <div>price</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
