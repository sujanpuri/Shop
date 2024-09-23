import React from 'react';
import AboutBg from '../Images/shop.svg';
import Logo from '../Images/Logo.jpg';

const Contact = () => {
  return (
    <div className='bg-black rounded-2xl m-2 p-2 md:m-7 md:p-6'
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      {/* Header Section */}
      <header className="text-white mt-7 md:mt-2 mb-7 text-center">
        <h1 className="text-xl md:text-4xl font-bold">Contact Us</h1>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-8 h-full">
        
        <div className='flex flex-col md:flex-row-reverse justify-center items-center space-y-4 md:space-y-0'>
          {/* Logo Image */}
          <div className="flex justify-center md:ml-24">
            <img src={Logo} alt="Logo" className="h-16 w-16 md:h-24 md:w-24 rounded-full p-1 border" />
          </div>

          {/* Contact Information */}
          <div className="bg-black bg-opacity-70 text-white p-2 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg md:text-3xl font-semibold">Our Contact Information</h2>
            <div className="mt-2 md:mt-4 space-y-1 md:space-y-2">
              <p className="text-xs md:text-lg"><strong>Address:</strong> Tarahara, Ithari-20, Nepal</p>
              <p className="text-xs md:text-lg"><strong>Phone:</strong> (123) 456-7890</p>
              <p className="text-xs md:text-lg"><strong>Email:</strong> shoppingcenter@gmail.com</p>
            </div>
          </div>
        </div>
      
        {/* Contact Form */}
        <form className="bg-white p-2 mt-5 md:m-0 md:p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-2xl">
          <div className="mb-3">
            <label htmlFor="name" className="block text-gray-700 text-xs md:text-sm font-bold mb-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700 text-xs md:text-sm font-bold mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-gray-700 text-xs md:text-sm font-bold mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-2 py-1 md:px-4 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white text-xs md:text-base px-3 py-1 md:px-6 md:py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
        
      </div>

      {/* Footer Section */}
      <footer className="text-white md:mt-8 text-center mt-2">
        <p className="text-xs md:text-lg">Thank you for reaching out to <strong>Tarahara Shopping Center</strong>!</p>
      </footer>
    </div>
  );
};

export default Contact;
