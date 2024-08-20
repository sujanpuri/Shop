import React from 'react';
import CategoryCard from '../../Components/CategoryCard';
import AboutBg from '../../Images/235729299927.jpg';
import ShoeImg from '../../Images/victoriano-izquierdo-Orcw3QahuS0-unsplash.jpg';
import ClotheImg from '../../Images/melanie-lim-246b6c6IeC0-unsplash.jpg'

const Categories = () => {
  return (
    <div className='rounded-lg m-7 h-[80vh] overflow-y-scroll p-1 flex flex-wrap justify-center'
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className=' m-3 h-[45vh] w-[370px] backdrop-blur-sm border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl={ShoeImg}
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl={ClotheImg}
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px] backdrop-blur-sm border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap  gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl={ShoeImg}
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl={ClotheImg}
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px] backdrop-blur-sm border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap  gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl={ShoeImg}
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl={ClotheImg}
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px] backdrop-blur-sm border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap  gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl={ShoeImg}
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl={ClotheImg}
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px] backdrop-blur-sm border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap  gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl={ShoeImg}
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl={ClotheImg}
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px] backdrop-blur-sm border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap  gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl={ShoeImg}
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl={ClotheImg}
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Categories