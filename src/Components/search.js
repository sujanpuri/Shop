import React, { useContext, useEffect, useState } from 'react'; 
import { CartContext } from '../context';
import ClotheBG from "../Images/RouteBG.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Components/firebase";

const Search = () => {
    const { searchedData, setSearchedData } = useContext(CartContext);
    const { apiData, setApiData } = useContext(CartContext);
    const [backUp, setBackUp] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    // Fetch items from Firebase once when the component mounts
    useEffect(() => {
        const getItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "items"));
                const itemArray = [];
                querySnapshot.forEach((doc) => {
                    itemArray.push({ id: doc.id, ...doc.data() }); // Collect user data
                });
                setApiData(itemArray); // Store in context
                setBackUp(itemArray);  // Backup original data
                setShowSearch(true);   // Show the search results after data is loaded
            } catch (e) {
                console.log("Error fetching documents: " + e.message);
            }
        };
        getItems();
    }, []); // Only run once when the component mounts

    // Searching the data
    useEffect(() => {
        if (searchedData) {
            const filteredData = backUp.filter(item =>
                item.name.toLowerCase().includes(searchedData.toLowerCase())
            );
            setApiData(filteredData);  // Update filtered data in context
            setShowSearch(true);  // Ensure it shows when there's a search term
        } else {
            setShowSearch(false); // Start fade-out transition
            setTimeout(() => {
                setApiData(backUp);  // Reset to original data if no search term
                setShowSearch(true); // Allow fade-in again if there's no search term
            }, 500); // Match duration with CSS transition
        }
    }, [searchedData, backUp]); // Trigger only when searchedData or backUp changes

    return (
        <div
            className={`backdrop-blur-sm top-[11vh] h-[100vh] w-full fixed flex justify-center z-0 transition-all duration-500 ease-in-out ${
                showSearch ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className='bg-black h-[80vh] rounded-b-lg w-[80vw] overflow-y-scroll'
                style={{
                    backgroundImage: `url(${ClotheBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Mapping the fetched Data */}
                {apiData && (
                    <div className='m-3 mt-9'>
                        {apiData.map((item) => (
                            <div key={item.id}>
                                <div className='flex border-b-[1px] border-gray-400'>
                                    <img src={item.url} alt={item.name} className='h-24 rounded-sm m-2' />
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
