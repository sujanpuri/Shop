import React, { useEffect, useState } from "react";
import ClotheBG from "../../Images/RouteBG.jpg";
import Clothe1 from "../../Images/eduardo-soares-QsYXYSwV3NU-unsplash.jpg";
import Clothe2 from "../../Images/melanie-lim-246b6c6IeC0-unsplash.jpg";

const Clothes = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchclothData() {
      try {
        const response = await fetch('https://shop-cfc18-default-rtdb.firebaseio.com/clothData.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const clothDataApi = await response.json();
        console.log("Fetched Data: ", clothDataApi); // Debug: check what's being fetched

        // Parse data from the object
        const parsedData = Object.keys(clothDataApi).map(key => ({
          id: key,
          ...clothDataApi[key]
        }));

        setApiData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchclothData();
  }, []);

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
            <div key={index} className="border p-4 rounded-lg backdrop-blur-sm shadow">
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
                <button className="bg-white rounded-md text-green-700 w-20 h-8 hover:bg-green-300 hover:text-black transition duration-500 ease-in-out">
                  <strong>Add +</strong>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p> // Fallback for empty or loading state
        )}

        {/* Static clothes data */}
        <div className="border p-4 rounded-lg backdrop-blur-sm shadow">
          <img
            src={Clothe1}
            alt="Cloth 1"
            className="w-72 h-48 object-cover mb-2"
          />
          <div className="flex flex-row justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Cloth 1</h3>
              <p>$129.99</p>
            </div>
            <button className="bg-white rounded-md text-green-700 w-20 h-8 hover:bg-green-300 hover:text-black transition duration-500 ease-in-out">
              <strong>Add +</strong>
            </button>
          </div>
        </div>
        
        <div className="border p-4 rounded-lg backdrop-blur-sm shadow">
          <img
            src={Clothe2}
            alt="Cloth 2"
            className="w-72 h-48 object-cover mb-2"
          />
          <div className="flex flex-row justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Cloth 2</h3>
              <p>$259.89</p>
            </div>
            <button className="bg-white rounded-md text-green-700 w-20 h-8 hover:bg-green-300 hover:text-black transition duration-500 ease-in-out">
              <strong>Add +</strong>
            </button>
          </div>
        </div>
        
        <div className="border p-4 rounded-lg backdrop-blur-sm shadow">
          <img
            src={Clothe2}
            alt="Cloth 2"
            className="w-72 h-48 object-cover mb-2"
          />
          <div className="flex flex-row justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Cloth 2</h3>
              <p>$259.89</p>
            </div>
            <button className="bg-white rounded-md text-green-700 w-20 h-8 hover:bg-green-300 hover:text-black transition duration-500 ease-in-out">
              <strong>Add +</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
