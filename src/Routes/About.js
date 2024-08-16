import React from 'react'
import AboutImg1 from '../Images/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg';

const About = () => {
  return (
    <div className='bg-gray-500 h-[80vh] rounded-2xl m-7 p-5'>
      <header className="bg-gray-800 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">About ShopEase</h1>
      </header>

      <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome to ShopEase</h2>
          <p className="text-lg text-gray-700 mt-4">
            Welcome to <strong>ShopEase</strong>, your number one source for all things [Your Shop's Specialty]. We're dedicated to giving you the very best of [products/services], with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Founded in [Year] by [Founder's Name], ShopEase has come a long way from its beginnings in [Starting Location]. When [Founder's Name] first started out, their passion for [shop's niche, e.g., "eco-friendly products"] drove them to do tons of research so that ShopEase can offer you [competitive differentiator, e.g., "the world's most advanced eco-friendly products"]. We now serve customers all over [your area or countries you serve], and are thrilled that we're able to turn our passion into our own website.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center space-y-4">
          <img src={AboutImg1} alt="Shop Image 1" className="h-[47vh] rounded-lg shadow-lg" />
        </div>
      </div>    

      <footer className="bg-gray-800 text-white py-4 text-center mt-6">
        <p className="text-lg">Thank you for visiting ShopEase!</p>
      </footer>
    </div>
  )
}

export default About