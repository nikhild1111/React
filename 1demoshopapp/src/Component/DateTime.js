import './DateTime.css'

function DateTime(props){
    // const day=24;//this will come from api and then we add in the tages dynamicaly here we not use ``
  
  const day=props.day;
  const month=props.month;
  const year=props.year;
    return(
        <div className='Date'> 
          {/* <span>{day}</span>
            <span> 02</span>
             <span> 2025</span> */}
             
<span>{day}</span>
<span>{month}</span>
<span>{year}</span>

        </div>
    );
}

export default DateTime;