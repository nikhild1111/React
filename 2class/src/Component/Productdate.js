import React from "react";
import './Productdate.css';
const Productdate=(props)=>{

    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
return (
    <div className="productdate">
        <div className='month'>{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
    </div>
);    

};

export default Productdate;