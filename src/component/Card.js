import React from 'react';
import '../styles/card.css';

const Card = ({ restaurant }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = restaurant;

    return (
        <div className='card-container'>
            <div className='card'>
                <img
                    className='res-logo'
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                    alt={name}
                />
                <div className='card-content'>
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-description'>{cuisines.join(', ')}</p>
                    <p className='card-rating'>{avgRating} ★</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Card;
