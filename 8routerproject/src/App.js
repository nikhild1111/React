import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import PrivateRoute from "./Components/PrivateRoute";

function App() {

const[isLogin,setIsLoggedIn]=useState(false);
useEffect(() => {
  console.log(isLogin);
}, [isLogin]); // Runs whenever sLogin changes
  return (
    <div className="flex flex-col font-bold w-screen h-screen bg-richblack-900">
<Navbar isLogin={isLogin} setIsLoggedIn={setIsLoggedIn}></Navbar>
<Routes>
  <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn}></Home>} ></Route>
  <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
  <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}></SignUp>}></Route>

{/* //either use the private route or use thsi both will work */}
  {/* <Route 
  path="/Dashboard" 
  element={isLogin ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
/> */}

  <Route 
  path="/Dashboard" 
  element={ <PrivateRoute isLogin={isLogin} ><Dashboard /></PrivateRoute> }
/>
</Routes>
     </div>
  );
}

export default App;
