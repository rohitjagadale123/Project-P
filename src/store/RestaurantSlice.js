import {createSlice} from '@reduxjs/toolkit';

const RestaurantSlice=createSlice({
    name:'restaurant',
    initialState:{
        restaurant:null
    },
    reducers:{
        addRestaurant:(state,action)=>{
            state.restaurant=action.payload;
        }
    }
});

export const {addRestaurant}=RestaurantSlice.actions;
export default RestaurantSlice.reducer;