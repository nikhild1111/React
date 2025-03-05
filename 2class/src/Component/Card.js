import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;//this means that class will have both class of child and itself and it chnges dynamicaly
  return <div className={classes}>{props.children}</div>;
};

export default Card;


// Handling CSS Classes
// const classes = "card " + props.className;
// "card " is a default class for styling.
// props.className allows additional classes to be added dynamically.
// This way, any extra class passed from the parent component is merged with "card".
// Example Usage
// If you use the Card component like this:

// <Card className="products">
// Then, classes will become:

// "card products"
// Which means the <div> will have both "card" and "products" styles applied.