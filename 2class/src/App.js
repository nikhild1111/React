import logo from './logo.svg';
import Products from './Component/Products';
import './App.css';
import NewProduct from './Component/NewProduct';

function App() {
  const products=[
    {id:'p1',
    title:'Nirma',
    amount:100,
    date:new Date(2021,8,10),
  },
    {id:'p2',
    title:'Surf Excel',
    amount:200,
    date:new Date(2021,2,2),
  },
    {id:'p3',
    title:'Tide',
    amount:100,
    date:new Date(2021,12,20),
  },
    {id:'p4',
    title:'Areal',
    amount:450,
    date:new Date(2021,5,5),
  },
];

function printproductdata(data){
  console.log("i am inside the prnav ");
  console.log(data);
}

  return (
    <div className="App">
      <NewProduct pranay={printproductdata}/>
      {/* //here we are passsing the function(as propes) insidde parent component it will go to the child and excute so we will get a answer */}
     <Products item={products}></Products>
    </div>
  );
}

export default App;
