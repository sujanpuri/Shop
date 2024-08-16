import React from 'react'
import HomeImage from '../Images/home.jpg'

const Home = () => {
  return (
    <div className='bg-gray-500 h-[80vh] rounded-2xl m-7 p-5 bg-img mb-0' 
    style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    </div> 
  )
}

export default Home