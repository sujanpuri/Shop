import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [login, setLogin] = useState(false);

    function SigninCLicked(){
        setLogin(!login);
    }   

  return (
    <div className="p-1 mb-2 flex flex-row justify-between align-middle text-white font-extrabold bg-black border-b-2">
      <h1 className="text-4xl m-2 pl-5 flex items-center">Shoping Center</h1>
      <div className="flex items-center">
        <NavLink to="/home" className="m-3 flex items-center">
          Home
        </NavLink>
        <NavLink to="/about" className="m-3 flex items-center">
          About
        </NavLink>
        <NavLink to="/categories" className="m-3 flex items-center">
          Categories
        </NavLink>
        <NavLink to="/contact" className="m-3 flex items-center">
          Contact
        </NavLink>
      </div>
      <div className="flex items-center">
        <input
          className="flex align-middle h-9 mr-0 p-1 rounded-l-md ml-6 text-black"
          placeholder="Seach for the product..."
          type="search"
        />
        <img
          className="flex align-middle h-9 ml-0 rounded-r-md mr-3"
          src="https://www.shutterstock.com/image-vector/search-icon-vector-editable-eps10-260nw-1263924991.jpg"
          alt="searchPNG"
        />
        {login?
        <button onClick={SigninCLicked} className="bg-gray-100 rounded-lg text-red-500 h-8 flex flex-row items-center p-2 mr-8">
          Log Out
          <img
            className="h-6 ml-2"
            src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png"
            alt="arrowPNG"
          />
        </button>:
        <button onClick={SigninCLicked} className="bg-gray-100 rounded-lg text-black h-8 flex flex-row items-center p-2 mr-8">
          Sign In
          <img
            className="h-6 ml-2"
            src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png"
            alt="arrowPNG"
          />
        </button>}
      </div>
    </div>
  );
};

export default Nav;
