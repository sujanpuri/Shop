import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../Images/Logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Cart from "./Cart";
import { CartContext } from "../context";

const Nav = () => {
  const [login, setLogin] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");
  const [menu, setmenu] = useState(false)


  const { isCartOn, setIsCartOn } = useContext(CartContext);
  const { searchedData, setSearchedData } = useContext(CartContext);


  function SigninCLicked() {
    setLogin(!login);
  }

  function NavClicked(nav) {
    setActiveNav(nav);
  }

  const cartclicked = () => {
    setIsCartOn(!isCartOn);
  };

  return (
    <div className="p-2 top-0 mb-0 flex flex-col md:flex-row fixed w-full justify-between align-middle text-white font-extrabold bg-black border-b-2 z-10">

      {/* Logo Section */}
      
      <div className="flex items-center justify-between md:pl-5 pl-2 w-full md:w-auto">
        <NavLink to="/home" 
          onClick={() => {
            NavClicked("/home")
          }}>
          <img
            src={Logo}
            alt="logo"
            className="h-8 md:h-10 flex items-center rounded-3xl"
          />
        </NavLink>
        <NavLink to="/home"
          onClick={() => {
            NavClicked("/home")
          }}
          className="text-2xl md:text-4xl m-2 flex items-center">
          Shopping Center
        </NavLink>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          {menu ? (
            <>
              <IoCloseSharp 
                onClick={() => setmenu(!menu)}
                className="bg-red-400 mr-1 w-7 md:mr-2 h-8 md:w-8 p-1 rounded-lg hover:bg-red-700 hover:text-white"
              />
            </>
          ) : (
            <button onClick={() => setmenu(!menu)} className="text-white p-2 focus:outline-none">
              {/* Replace this with your desired icon for opening the menu */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}

        </div>
      </div>

      {/* Nav section */}
      <div className={`flex transition-all duration-500 ease-in-out md:flex-row items-center md:flex ${menu ? "hidden" : "flex"} md:flex justify-center w-full md:w-auto`}>
        <NavLink
          to="/home"
          onClick={() => {
            NavClicked("/home")
          }}
          className={activeNav === "/home"
            ? "m-2 md:m-3 border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
            : "m-2 md:m-3 hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => {NavClicked("/about")
          }}
          className={activeNav === "/about"
            ? "m-2 md:m-3 border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
            : "m-2 md:m-3 hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"}
        >
          About
        </NavLink>
        <NavLink
          to="/categories"
          onClick={() => {NavClicked("/categories")
          }}
          className={activeNav === "/categories"
            ? "m-2 md:m-3 border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
            : "m-2 md:m-3 hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"}
        >
          Categories
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => {NavClicked("/contact")
          }}
          className={activeNav === "/contact"
            ? "m-2 md:m-3 border-b-2 text-red-400 border-b-red-400 transition-all duration-300 ease-in-out transform scale-105"
            : "m-2 md:m-3 hover:border-b-2 hover:text-red-400 hover:border-b-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"}
        >
          Contact
        </NavLink>
      </div>

      {/* Last section */}
      <div className={`flex items-center justify-between mt-2 md:mt-0 md:flex ${menu ? "flex" : "hidden"}`}>
        <div className=" bg-white flex items-center w-[70%] md:w-auto justify-between ml-2 mr-3 h-8  rounded-md text-black" >
          <input
            className="flex align-middle h-8 w-[100%] p-1 rounded-l-md text-black"
            placeholder="Search..."
            type="search"
            value={searchedData}
            onChange={(e) => setSearchedData(e.target.value)}
          />
          <IoSearch  className=" w-15% h-8 w-8"/>
        </div>
        <button
          className="bg-gray-100 w-[10%] md:w-auto   rounded-md mr-3 text-black h-8 flex flex-row items-center p-2 hover:bg-gray-300"
          onClick={cartclicked}
        >
          <p className="hidden sm:block">Cart</p>
          <FaShoppingCart className="h-8 w-8 md:p-1 rounded-r-md" />
        </button>
        {isCartOn && <Cart />}

        {login ? (
          <button
            onClick={SigninCLicked}
            className="bg-gray-100 w-[10%] md:w-auto rounded-lg text-red-500 h-9 flex flex-row items-center p-2 mr-2 sm:mr-4 lg:mr-8 hover:bg-red-300 hover:text-black ease-in-out duration-300"
          >
            <span className="hidden md:block">Log Out</span>
            <img
              className="h-6 md:ml-2"
              src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png"
              alt="arrowPNG"
            />
          </button>
        ) : (
          <button
            onClick={SigninCLicked}
            className="bg-gray-100 w-[10%] md:w-auto rounded-lg text-green-600 h-9 flex flex-row items-center p-2 mr-2 sm:mr-4 lg:mr-8 hover:bg-green-300 hover:text-black ease-in-out duration-300"
          >
            <span className="hidden md:block">Sign In</span>
            <img
              className="h-6 md:ml-2"
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
