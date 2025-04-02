import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cartitem from "./Components/Cartitem";
import Product from "./Components/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";


// usestate re render the short part of component where we do changes
// but in the props driling when we perform the opration the then from the multiple component we pass the data so use state rerender all of them 
// so we use contex and the redux so the data is transfer to the specific component and only its part rerender
// not entire page
const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar></Navbar>
        </div>
        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>

  </div>)
};

export default App;
