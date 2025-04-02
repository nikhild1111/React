import React from "react";
import { useStore } from "react-redux";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";
import { store } from "./redux/Store";

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Provider store={store}>
          <App />   
        </Provider>



  
);
