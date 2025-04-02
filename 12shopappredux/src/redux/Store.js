import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CounterSlices"; // Import reducer

export const store = configureStore({
    reducer: {
        counter: counterReducer, // Make sure "counter" key is here
    }
    //take care if we are doing the default export dont use {} 
});
