import React from 'react';
import CategoryCard from '../../Components/CategoryCard';
import AboutBg from '../../Images/shop.svg';

const Categories = () => {
  return (
    <div className='bg-black rounded-lg m-7 h-[80vh] overflow-y-scroll p-2'
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      {/* Heading */}
      <div className="text-center text-white py-4">
        <h1 className="text-2xl md:text-4xl font-bold">Categories</h1>
      </div>

      {/* Category Cards */}
      <div className='flex flex-wrap justify-center gap-4'>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div 
            key={index} 
            className='
              w-full 
              md:w-[350px] 
              lg:w-[400px] 
              h-auto 
              bg-black 
              bg-opacity-70 
              border-white 
              border-2 
              p-4 
              rounded-lg 
              shadow-lg 
              m-2 
              max-w-[95%] {/* Ensures it fits well on mobile */}
            '>
            <div className="flex flex-col items-center space-y-3">
              <h1 className="text-lg md:text-2xl font-bold text-white text-center">Clothings & Shoes</h1>
              <div className='flex items-center justify-around w-full flex-wrap'>
                <CategoryCard 
                  title="Shoes" 
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWovt5JMTSU3wIj2mVLsqtDcPepiQEdiijg&s"
                  linkUrl="/categories/shoes"
                  customClass="h-44 sm:h-40 md:h-48 lg:h-52"
                />
                <CategoryCard 
                  title="Clothes" 
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBe_hpfvNOHo15lP7jWgQcyNSWVi273MIdA&s"
                  linkUrl="/categories/clothes"
                  customClass="h-44 sm:h-40 md:h-48 lg:h-52"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
