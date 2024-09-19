import React from 'react'
import AboutBg from '../Images/shop.svg';
import AboutImg1 from '../Images/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg';

const About = () => {
  return (
    <div className='bg-about rounded-2xl m-7 p-5'
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <header className=" text-white py-6 text-center">
        <h1 className="text-4xl font-bold">About Shopping Center</h1>
      </header>

      <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
        <div className="flex-1 mb-6 md:mb-0 bg-black bg-opacity-70 border p-3 rounded-lg">
          <h2 className="text-3xl font-semibold text-white">Welcome to Shopping Center</h2>
          <p className="text-lg text-white mt-4">
            Welcome to <strong>Shopping Center</strong>, your number one source for all things [Beer]. We're dedicated to giving you the very best of [products], with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-lg text-white mt-4">
            Founded in [2001] by [Ram B. Giri], Shopping Center has come a long way from its beginnings in [Tarahara]. When [Ram B. Giri] first started out, their passion for ["eco-friendly products"] drove them to do tons of research so that Shopping Center can offer you ["The world's most advanced eco-friendly products"]. We now serve customers all over [Tarahara], and are thrilled that we're able to turn our passion into our own website.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center space-y-4">
          <img src={AboutImg1} alt="Shop pic 1" className="h-[47vh] rounded-lg shadow-lg" />
        </div>
      </div>    

      <footer className=" text-white py-4 text-center mt-6">
        <p className="text-lg">Thank you for visiting Shopping Center!</p>
      </footer>
    </div>
  )
}

export default About