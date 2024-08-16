import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../Images/Logo.jpg";

const Nav = () => {
  const [login, setLogin] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");

  function SigninCLicked() {
    setLogin(!login);
  }
  function NavClicked(nav) {
    setActiveNav(nav);
  }

  return (
    <div className="p-1 mb-2 flex flex-row justify-between align-middle text-white font-extrabold bg-black border-b-2">
      <div className="flex items-center pl-5">
        <img
          src={Logo}
          alt="logo"
          className="h-9 flex items-center rounded-3xl"
        />
        <h1 className="text-4xl m-2 flex items-center">Shopping Center</h1>
      </div>
      <div className="flex items-center">
        <NavLink
          to="/home"
          onClick={()=>NavClicked("/home")}
          className={
            activeNav === "/home"
              ? "m-3 flex items-center border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
              : "m-3 flex items-center hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={()=>NavClicked("/about")}
          className={
            activeNav === "/about"
              ? "m-3 flex items-center border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
              : "m-3 flex items-center hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/categories"
          onClick={()=>NavClicked("/categories")}
          className={
            activeNav === "/categories"
              ? "m-3 flex items-center border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
              : "m-3 flex items-center hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/contact"
          onClick={()=> NavClicked("/contact")}
          className={
            activeNav === "/contact"
              ? "m-3 flex items-center border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
              : "m-3 flex items-center hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          }
        >
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
        {login ? (
          <button
            onClick={SigninCLicked}
            className="bg-gray-100 rounded-lg text-red-500 h-8 flex flex-row items-center p-2 mr-8 hover:bg-red-300 hover:text-black ease-in-out duration-300"
          >
            Log Out
            <img
              className="h-6 ml-2"
              src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png"
              alt="arrowPNG"
            />
          </button>
        ) : (
          <button
            onClick={SigninCLicked}
            className="bg-gray-100 rounded-lg text-green-600 h-8 flex flex-row items-center p-2 mr-8 hover:bg-green-300 hover:text-black ease-in-out duration-300"
          >
            Sign In
            <img
              className="h-6 ml-2"
              src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png"
              alt="arrowPNG"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
