import croix from "../../assets/+.png"
import React, { useState } from 'react';

function CardSellers({ cover, title, content}) {
        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
    
	return (
		<div className='Sellers-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="div-img">
        <img className='image' src={cover} alt={`${title} cover`} />
      </div>
        {isHovered ? (
        <div className="text-overlay">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
        ) : (
        <div className="img-overlay">
            <img className='image' src={croix} alt={`${title} cover`} />
        </div>
        )}
      </div>

	)
}

export default CardSellers