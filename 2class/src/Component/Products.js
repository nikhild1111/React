import Card from './Card';
import Productitem from './Productitem';
import './Products.css';

const Products=(props) => {
    return(<Card className="products">
        <Productitem
            title={props.item[0].title}
            amount={props.item[0].amount}
            date={props.item[0].date}/>
        
        <Productitem
            title={props.item[1].title}
            amount={props.item[1].amount}
            date={props.item[1].date}/>
        
        <Productitem
            title={props.item[2].title}
            amount={props.item[2].amount}
            date={props.item[2].date}
           />
        
        <Productitem
            title={props.item[3].title}
            amount={props.item[3].amount}
            date={props.item[3].date}/>
        
    </Card>);
}
export default Products;