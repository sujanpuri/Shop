// src/Components/CategoryCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, imageUrl, linkUrl }) => {
    return (
        <div className="w-36 h-40 flex items-center justify-center bg-gray-100 text-black shadow-lg z-0 rounded-md">
            <Link to={linkUrl} className="text-center">
                <img src={imageUrl} alt={title} className="border-2 rounded-lg h-28 w-32 object-cover" />
                <h3 className="mt-2 text-sm md:text-lg font-semibold">{title}</h3>
            </Link>
        </div>
    );
}

export default CategoryCard;
