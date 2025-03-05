import './Item.css'

function Item(props){
    // const itemname='nirma';
    const itemname=props.name;
return (<div><p className="my">{itemname}</p>
{props.children}</div>);
}

export default Item;