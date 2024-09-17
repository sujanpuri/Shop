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
    <div className="fixed inset-0 z-[999] flex items-start justify-center backdrop-blur-sm text-white">
      <br />
      <div>
        {itemDetails ? (
          <div className="border-2 border-white mt-[18vh] rounded-lg"
          style={{
            backgroundImage: `url(${ClotheBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
              <p
                onClick={() => Xclicked()}
                className="cursor-pointer flex justify-end rounded-t-xl pr-4 pt-3 text-xl font-bold text-red-500"
              >
                X
              </p>
            <div
              className="relative z-[1000] h-auto w-[50vw] flex rounded-b-xl p-6 pt-0 justify-start items-start"
            >
              <img
                src={itemDetails.url}
                alt="item"
                className="h-[50vh] object-cover mb-4 rounded"
              />
              <div className="flex-col items-start h-[45vh] w-[25vw] m-4 p-3">
                <h1 className="font-bold text-4xl">{itemDetails.name}</h1>
                <div className="pt-10 text-xl">
                  Price: ${itemDetails.price}
                  <p>
                    {itemDetails.details} designed for {itemDetails.gender}
                  </p>
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
