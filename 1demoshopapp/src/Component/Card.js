import './Card.css';
function Card(props){
    const classes='card'+props.className;//to add the property tot he child separetly we use this 
    return (<div className={classes}>
{props.children}
    </div>);
}
export default Card;