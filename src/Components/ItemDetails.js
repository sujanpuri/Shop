import React, { useContext } from "react";
import { CartContext } from "../context";
import ClotheBG from "../Images/RouteBG.svg";

const ItemDetails = () => {
  const { itemDetails, setitemDetails } = useContext(CartContext);
  const { itemOn, setItemOn } = useContext(CartContext);

  function Xclicked() {
    setItemOn(false);
    setitemDetails(null); // Reset to null or {}
  }

  return (
    <div className="fixed mt-[-45px] md:mt-auto inset-0 z-[999] flex items-center justify-center backdrop-blur-sm text-white overflow-y-auto">
      <br />
      <div>
        {itemDetails ? (
          <div
            className="bg-black border-2 border-white mt-[18vh] md:mt-[5vh] rounded-lg"
            style={{
              backgroundImage: `url(${ClotheBG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Close Button */}
            <p
              onClick={Xclicked}
              className="cursor-pointer flex justify-end rounded-t-xl pr-4 pt-1 md:pt-3 text-xl font-bold text-red-500"
            >
              X
            </p>

            {/* Main Content Container */}
            <div className="relative z-[1000] h-auto w-[90vw] md:w-[50vw] flex flex-col md:flex-row rounded-b-xl p-6 pt-0 justify-start items-center md:items-start">
              
              {/* Image Section */}
              <img
                src={itemDetails.url}
                alt="item"
                className="w-full h-[40vh] md:h-[50vh] object-cover mb-4 md:mb-0 md:w-[25vw] rounded"
              />

              {/* Details Section */}
              <div className="flex-col items-start w-full md:w-[25vw] h-auto md:h-[45vh] m-4 p-3">
                <h1 className="font-bold text-2xl md:text-4xl">{itemDetails.name}</h1>
                <div className="pt-6 md:pt-10 text-lg md:text-xl">
                  <p>Price: ${itemDetails.price}</p>
                  <p>{itemDetails.details} designed for {itemDetails.gender}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No item details available</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
