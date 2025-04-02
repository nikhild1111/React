import { createSlice } from "@reduxjs/toolkit";

export  const CartSlice=createSlice({
name: "Cart",
initialState:[],
reducers:{
    // reducer funtion takes to argument state and action 
    // action.payload gives the input paramter which we pass in the input
// we can access sinle or multiple value from action.payload no need to hanle separetaly

// Redux automatically calls the CartSlice.reducer function. when we call add and then based on store and state it applies the correct reducer (add) and updates the state.
    add:(state,action)=>{

        state.push(action.payload);
    },
    remove:(state,action)=>{
        return state.filter((item)=>item.id!==action.payload);
    },
    
}
}

);

export const {add,remove,count}=CartSlice.actions;
export default CartSlice.reducer;