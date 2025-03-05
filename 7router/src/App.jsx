import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { NavLink, Route,Routes } from 'react-router-dom';
import './App.css'
import Home from './Component/Home';
import About from './Component/About';
import NoteFound from './Component/NoteFound';
import Labs from './Component/labs';
import Support from './Component/Support';
import MainHeader from './Component/MainHeader';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
<nav>
  <ul>

    {/* here we difind the nav bar for routing through the diffrent pages using a spa */}
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li> <NavLink to="/support">Support</NavLink></li>
    <li> <NavLink to="/about">About</NavLink></li>
    <li> <NavLink to="/labs">labs</NavLink></li>
  </ul>
</nav>

     <Routes>
      {/* it gives the permision for child to render */}
      <Route path='/' element={<MainHeader/>}>
   {/* this is the default route */}
      <Route index element={<Home/>}></Route>
      <Route path="/support" element={<Support/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/labs" element={<Labs/>}/>
      <Route path="*" element={<NoteFound/>}/>
      </Route>
     </Routes>

       </div>
    </>
  )
}

export default App
