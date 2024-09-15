import React, { useContext, useEffect, useState } from "react";
import ClotheBG from "../../Images/RouteBG.jpg";
import { CartContext } from "../../context";

const Clothes = () => {
  const [apiData, setApiData] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext); //importing

  useEffect(() => {
    async function fetchclothData() {
      try {
        const response = await fetch(
          "https://shop-cfc18-default-rtdb.firebaseio.com/clothData.json"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const clothDataApi = await response.json();

        // Parse data from the object (is stored in object format)
        const parsedData = Object.keys(clothDataApi).map((key) => ({
          id: key,
          ...clothDataApi[key],
        }));

        setApiData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchclothData();
  }, []);

  const handleButtonClick = (newData) => {
    setCartItems([...cartItems, newData]);
    alert("Item added to the cart")
  };

  return (
    <div
      className="p-4 flex flex-wrap flex-col items-center border-red-500"
      style={{
        backgroundImage: `url(${ClotheBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Clothes</h2>

      <div className="flex flex-wrap justify-center gap-4 p-2">
        {apiData.length > 0 ? (
          apiData.map((clothApiData, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg  bg-black bg-opacity-70 shadow"
            >
              <img
                src={clothApiData.url}
                alt={clothApiData.shoeName}
                className="w-72 h-48 object-cover mb-2" 
              />
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{clothApiData.name}</h3>
                  <p>${clothApiData.price}</p>
                </div>
                <button
                  onClick={() => handleButtonClick(clothApiData)}
                  className="bg-white rounded-md text-green-700 w-20 h-8 hover:bg-green-300 hover:text-black transition duration-500 ease-in-out"
                >
                  <strong>Add +</strong>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p> // Fallback for empty or loading state
        )}

       
      </div>
    </div>
  );
};

export default Clothes;
