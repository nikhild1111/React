import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./Context/AppContext";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
    {/* App is present in the </AppContextProvider> so its mean that no need to provide the  </AppContextProvider> explicetly it will directly go inside the </AppContextProvider> so we can access the app directly  */}
  </AppContextProvider>
);
