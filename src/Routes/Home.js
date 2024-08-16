import React from "react";
import HomeImage from "../Images/background.png";
import Facebook from '../Images/facebook-brands-solid.svg'
import Instagram from '../Images/instagram-brands-solid.svg'

const Home = () => {
  return (
    <div
      className="bg-gray-500 h-[80vh] rounded-2xl m-7 p-5 bg-img mb-0"
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >   
      <div className="text-start p-5 w-[65vw] mt-16">
        <p className="text-lg flex flex-row items-center text-white mb-6 border-white border w-fit p-2 pl-5 rounded-3xl">
            <strong>Find us:</strong> <img className="h-7 ml-4 mr-3 hover:opacity-65" src={Facebook} alt="fb" /> <img className="h-7 ml-1 mr-4 hover:opacity-65" src={Instagram} alt="Insta" />
        </p>
        <h1 className="text-5xl font-bold text-white mt-11 mb-4">
          The Best Market Place of your Area<br/>Tarahara Shopping Center
        </h1>
        <div className="text-white m-16">
          <p className="mb-2">
            <strong>Why Shop With Us?</strong>
          </p>
          <ul className="list-disc list-inside">
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
