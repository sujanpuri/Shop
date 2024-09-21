import React from 'react'
import AboutBg from '../Images/shop.svg';
import Logo from '../Images/Logo.jpg'

const Contact = () => {
  return (
    <div className='bg-black rounded-2xl m-7 p-5'
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        
      <header className=" text-white py-2 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      <div className="">
        <div className="flex flex-row justify-evenly items-center">
          {/* Contact Form */}
          <div className="flex flex-row">
            <form className="bg-white p-2 rounded-lg shadow-lg mt-2 w-96">
              <div className="mb-3">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
          <div>
            <img src={Logo} alt="Logo" className='h-24 rounded-[50px] p-1 border' />
          </div>
          {/* Contact Information */}
          <div className="flex flex-col items-center  bg-black bg-opacity-70 shadow-sm p-5 shadow-white">
            <h2 className="text-3xl font-semibold text-white">Our Contact Information</h2>
            <div className="mt-4">
              <p className="text-lg text-white mb-2">
                <strong>Address:</strong> Tarahara, Ithari-20, Nepal
              </p>
              <p className="text-lg text-white mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-lg text-white mb-2">
                <strong>Email:</strong> shoppingcenter@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className=" text-white py-4 text-center mt-6">
        <p className="text-lg">Thank you for reaching out to <strong>Tarahara Shopping Center</strong> !</p>
      </footer>
    </div>
  )
}

export default Contact