import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-500 h-[80vh] rounded-2xl m-7 p-5 overflow-y-scroll'>
        
      <header className="bg-gray-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      <div className="mt-6 max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Contact Form */}
          <div className="flex-1 mb-6 md:mb-0">
            <form className="bg-white p-6 rounded-lg shadow-lg mt-4">
              <div className="mb-4">
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

          {/* Contact Information */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800">Our Contact Information</h2>
            <div className="mt-4">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Email:</strong> contact@shopease.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4 text-center mt-6">
        <p className="text-lg">Thank you for reaching out to ShopEase!</p>
      </footer>
    </div>
  )
}

export default Contact