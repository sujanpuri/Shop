import React from 'react';
import CategoryCard from '../../Components/CategoryCard';
import AboutBg from '../../Images/shop.svg';

const Categories = () => {
  return (
    <div className='bg-black rounded-lg m-7 h-[80vh] overflow-y-scroll p-1 flex flex-wrap justify-center'
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className=' m-3 h-[45vh] w-[370px]  bg-black bg-opacity-70 border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWovt5JMTSU3wIj2mVLsqtDcPepiQEdiijg&s"
                linkUrl="/categories/shoes"
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBe_hpfvNOHo15lP7jWgQcyNSWVi273MIdA&s"
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px]  bg-black bg-opacity-70 border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWovt5JMTSU3wIj2mVLsqtDcPepiQEdiijg&s"
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBe_hpfvNOHo15lP7jWgQcyNSWVi273MIdA&s"
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px]  bg-black bg-opacity-70 border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWovt5JMTSU3wIj2mVLsqtDcPepiQEdiijg&s"
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBe_hpfvNOHo15lP7jWgQcyNSWVi273MIdA&s"
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px]  bg-black bg-opacity-70 border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWovt5JMTSU3wIj2mVLsqtDcPepiQEdiijg&s"
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBe_hpfvNOHo15lP7jWgQcyNSWVi273MIdA&s"
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px]  bg-black bg-opacity-70 border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWovt5JMTSU3wIj2mVLsqtDcPepiQEdiijg&s"
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBe_hpfvNOHo15lP7jWgQcyNSWVi273MIdA&s"
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
      <div className=' m-3 h-[45vh] w-[370px]  bg-black bg-opacity-70 border-white border-2 p-4 rounded-lg shadow-lg'>
        <div className="flex flex-wrap gap-4 m-2 justify-center">
          <h1><strong>Clothings & Shoes</strong></h1>
          <div className='flex flex-wrap gap-4'>
            <CategoryCard 
                title="Shoes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWovt5JMTSU3wIj2mVLsqtDcPepiQEdiijg&s"
                linkUrl="/categories/shoes" 
            />
            <CategoryCard 
                title="Clothes" 
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBe_hpfvNOHo15lP7jWgQcyNSWVi273MIdA&s"
                linkUrl="/categories/clothes" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories