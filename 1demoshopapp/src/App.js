// import logo from './logo.svg';
import './App.css';
import Item from './Component/Item.js';
import DateTime from './Component/DateTime.js';
import Card from './Component/Card.js';
function App() {
  const response=[{item1name:"niram1",
    item1date:"P1",
    item1month:"june1",
    itemyear:"19983"
  },
  {item1name:"niram2",
    item1date:"202",
    item1month:"june2",
    itemyear:"2000"
  },{item1name:"niram3",
    item1date:"203",
    item1month:"june3",
    itemyear:"2020"
  }

  ];
  // const item2="Surfexcel";
  return (
    <div>
    {/* <Item name="Nirma"></Item>
    <DateTime day="20" month="june" year="1998"></DateTime>
    <Item name={item2}></Item>
    <DateTime day="30" month="july" year="2000"></DateTime>
    <Item name="555"></Item>
    <DateTime day="24" month="sept" year="2010"></DateTime> */}
  <Card> 
    <Item name={response[0].item1name}>To  print the costome component data</Item>
    <DateTime day={response[0].item1date} month={response[0].item1month} year={response[0].itemyear}></DateTime>
    <Item name={response[1].item1name}></Item>
    <DateTime day="30" month="july" year="2000"></DateTime>
    <Item name="555"></Item>
    <DateTime day={response[2].item1date} month={response[2].item1month} year={response[2].itemyear}></DateTime>
    <div className="App">
     First react class
    </div>
    </Card>
    </div>
  );
}

export default App;
