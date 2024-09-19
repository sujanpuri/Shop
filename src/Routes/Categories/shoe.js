import React, { useContext, useEffect, useState } from "react";
import ClotheBG from "../../Images/RouteBG.jpg";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../Components/firebase";
import { CartContext } from "../../context";
import ItemDetails from "../../Components/ItemDetails";


const FireStore = () => {
  const [ Items, setItems] = useState([]); // Store users as an array
  const { itemOn, setItemOn } = useContext(CartContext);
  const { itemDetails, setitemDetails } = useContext(CartContext);
  const { cartItems, setCartItems } = useContext(CartContext); //importing
  const { selectedItem, setSelectedItem } = useContext(CartContext)

  // READ Operation: Fetching users from Firestore
  useEffect(() => {
    const getItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "items"));       //you also can edit the collection by updating the items in state. and giving the name of collection as we need.
        const itemArray = [];         // Collect users in an array
        querySnapshot.forEach((doc) => {
          itemArray.push({ id: doc.id, ...doc.data() }); // Collect user data
        });
        setItems(itemArray); // Set the Items array in state
      } catch (e) {
        console.log("Error fetching documents: " + e.message);
      }
    };
    getItems();
  }, []);

  const handleButtonClick = (newData) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((item) => item.name === newData.name);
    if (existingItem) {
      // If the item already exists, update the count and total price
      const updatedCart = cartItems.map((item) =>
        item.name === newData.name
          ? {
              ...item,
              count: item.count + 1, // Increase the count
              totalPrice: (item.count + 1) * item.price, // Update the total price
            }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // If the item doesn't exist, add it to the cart with count 1 and totalPrice
      setCartItems([
        ...cartItems,
        {
          ...newData,
          count: 1, // Initial count
          totalPrice: newData.price, // Total price for the first item
        },
      ]);
  }

  alert("Item added to the cart");
  };

  const ImgClicked = (itemdetail) => {
    setItemOn(true)
    setitemDetails(itemdetail)
  }

  setSelectedItem("shoes");

  const clothItems = 
    selectedItem === "Clothes"
      ? Items.filter((item) => item.category === "Clothes")
      : Items;

  return (
    <div
      className="p-4 flex flex-wrap flex-col items-center border-red-500"
      style={{
        backgroundImage: `url(${ClotheBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Shoes</h2>
      {itemOn && <ItemDetails />}

      <div className="flex flex-wrap justify-center gap-4 p-2">
        {Items.length > 0 ? (
          clothItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg  bg-black bg-opacity-70 shadow"
            >
              <img
                src={item.url}
                alt={item.shoeName}
                className="w-72 h-48 object-cover mb-2"
                onClick={()=> ImgClicked(item)}
              />
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => handleButtonClick(item)}
                  className="bg-white rounded-md text-green-700 w-20 h-8 hover:bg-green-300 hover:text-black transition duration-500 ease-in-out"
                >
                  <strong>Add +</strong>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading Items...</p> 
        )}

      </div>
    </div>
  );
};


export default FireStore;





