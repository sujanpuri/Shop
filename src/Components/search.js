import React, { useContext, useEffect, useState } from 'react'; 
import { CartContext } from '../context';
import ClotheBG from "../Images/RouteBG.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Components/firebase";
import ItemDetails from './ItemDetails';

const Search = () => {
    const { searchedData, setSearchedData } = useContext(CartContext);
    const { apiData, setApiData } = useContext(CartContext);
    const [backUp, setBackUp] = useState([]);

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
        } else {
            setApiData(backUp);  // Reset to original data if no search term
        }
    }, [searchedData, backUp]); // Trigger only when searchedData or backUp changes


    return (
        <div className='backdrop-blur-sm h-[80vh] w-full fixed flex justify-center z-0'>
            <div className='bg-black w-[80vw] overflow-y-scroll'
                style={{
                    backgroundImage: `url(${ClotheBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Mapping the fetched Data */}
                {apiData && (
                    <div className='m-3'>
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
