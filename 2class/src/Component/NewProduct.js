import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){
    function saveproduct(product){
        console.log("in size new product");
        console.log(product);

        // calling parent function
      props.pranay(product);  
    }

    return(<div className='newpro'>
    <ProductForm onsaveproduct={saveproduct}/>
    </div>);
}
export default NewProduct;