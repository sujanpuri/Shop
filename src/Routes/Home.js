import React from "react";
import HomeImage from "../Images/background.png";
import Facebook from '../Images/facebook-brands-solid.svg';
import Instagram from '../Images/instagram-brands-solid.svg';

const Home = () => {
  return (
    // Main Background
    <div
      className="bg-black h-[76vh] rounded-2xl m-7 mt-16 md:mt-7 pl-0 md:p-5 mb-0"
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >   
      <div className="text-start p-5 pt-12 md:pt-5 md:p-5 w-[90vw] md:w-[65vw] md:mt-16 ">
        <p className="text-lg flex flex-row items-center text-white mb-6 border-white border w-fit p-2 pl-5 rounded-3xl hover:shadow-md hover:shadow-gray-500">
          <strong>Find us:</strong> 
          <img className="h-7 ml-4 mr-3 hover:opacity-65" src={Facebook} alt="fb" /> 
          <img className="h-7 ml-1 mr-4 hover:opacity-65" src={Instagram} alt="Insta" />
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-11 mb-4">
          The Best Market Place of your Area<br/>"Tarahara Shopping Center"
        </h1>
        <div className="text-white m-4 md:m-16">
          <p className="mb-2 text-lg mt-20 md:mt-auto md:text-xl">
            <strong>Why Shop With Us?</strong>
          </p>
          <ul className="list-disc list-inside text-sm md:text-base">
            <li>Wide Range of Products</li>
            <li>Exclusive Discounts and Offers</li>
            <li>Fast and Secure Shipping</li>
            <li>24/7 Customer Support</li>
            <li>Easy Returns and Refunds</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
