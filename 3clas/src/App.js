import React, { useState } from 'react'
import Data from './data';
import Tours  from './Component/Tours'


const App = () => {

  const [tours,setTours]=useState(Data);


  
  //this will give all the tours except the tours which have a id as the given and the we call the setTour so it will be reflect on the app
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id !== id);

    setTours(newTours);
  }

  if(tours.length===0){
    return (

      <div className='refresh'>
        <h2>NO Tours left</h2>
        <button className='btn-white' onClick={()=>setTours(Data)}>
          Refresh
        </button>
      </div>
    );
  }else{
    return (
      <div className='App'>
  
        {/* //passing a varible or array tours */}
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    );
  }
 
};

export default App;
