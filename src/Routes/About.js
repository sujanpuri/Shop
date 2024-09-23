import React from 'react'; 
import AboutBg from '../Images/shop.svg';
import AboutImg1 from '../Images/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg';

const About = () => {
  return (
    <div className='bg-black rounded-2xl m-2 p-4 md:m-7 md:p-7'
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Header Section */}
      <header className="text-white py-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">About Shopping Center</h1>
      </header>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row md:space-x-6 mt-4 md:mt-6">
        {/* Text Section */}
        <div className="flex-1 mt-4 md:mb-0 bg-black bg-opacity-70 border p-2 md:p-4 rounded-lg">
          <h2 className="text-xl md:text-3xl font-semibold text-white">Welcome to Shopping Center</h2>
          <p className="text-xs md:text-lg text-white mt-2 md:mt-4">
            Welcome to <strong>Shopping Center</strong>, your number one source for all things [Beer]. We're dedicated to giving you the very best of [products], with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-xs md:text-lg text-white mt-2 md:mt-4">
            Founded in [2001] by [Ram B. Giri], Shopping Center has come a long way from its beginnings in [Tarahara]. When [Ram B. Giri] first started out, their passion for ["eco-friendly products"] drove them to do tons of research so that Shopping Center can offer you ["The world's most advanced eco-friendly products"]. We now serve customers all over [Tarahara], and are thrilled that we're able to turn our passion into our own website.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex flex-col mb-4 items-center">
          <img 
            src={AboutImg1} 
            alt="Shop pic 1" 
            className="h-[30vh] md:h-[47vh] w-full md:w-auto rounded-lg shadow-lg object-cover" 
          />
        </div>
      </div>    

      {/* Footer Section */}
      <footer className="text-white py-2 md:py-4 text-center mt-4 md:mt-6">
        <p className="text-xs md:text-lg">Thank you for visiting Shopping Center!</p>
      </footer>
    </div>
  );
};

export default About;
