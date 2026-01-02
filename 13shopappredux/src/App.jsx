import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cartitem from "./Components/Cartitem";
import Product from "./Components/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import { useState ,useEffect} from "react";




// usestate re render the short part of component where we do changes
// but in the props driling when we perform the opration the then from the multiple component we pass the data so use state rerender all of them 
// so we use contex and the redux so the data is transfer to the specific component and only its part rerender
// not entire page


const App = () => {

  const[isLogin,setIsLoggedIn]=useState(false);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);
  return (<div>

     
        <div className="bg-slate-900">
        <Navbar isLogin={isLogin} setIsLoggedIn={setIsLoggedIn}></Navbar>
        </div>
        <Routes>
        {/* So if your app opens at http://localhost:3000/ (which is the default when you start your React app), it will match this route: */}
{/* <Route path="/" element={<Login />} /> */}

          <Route path="/" element={ <Login setIsLoggedIn={setIsLoggedIn} > </Login>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>

  </div>)
};

export default App;
