import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import '../styles/card.css';
import Shimmer from './Shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant } from '../store/RestaurantSlice';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const restaurants = useSelector((store) => store.Restaurant.restaurant);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const fetchedRes = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        dispatch(addRestaurant(fetchedRes));
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            {loading ? (
                <Shimmer />
            ) : (
                <div className='card-main-container'>
                    {restaurants?.map((restaurant) => (
                        <Card key={restaurant.info.id} restaurant={restaurant.info} />
                    ))}
                </div>
            )}
        </>
    );
};

export default HomePage;
