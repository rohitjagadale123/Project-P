import {configureStore} from '@reduxjs/toolkit'
import RestaurantSlice from './RestaurantSlice';


const appstore=configureStore({

    reducer:{
        Restaurant:RestaurantSlice
       

    }
});

export default appstore;