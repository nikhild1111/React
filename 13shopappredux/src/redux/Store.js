import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./Slices/CartSlice";

export const store=configureStore({
    reducer:{
        // key=slice name wich we give   and value =slicename whoch we give to function
        Cart:CartSlice,
    }
})