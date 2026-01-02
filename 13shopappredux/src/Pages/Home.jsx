import React, { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import "../index.css";
import Product from '../Components/Product';
const Home = () => {

    // function is never change always the data is changed so used the data in the useeffect not the function
    const [API_URL, setApiUrl] = useState("https://fakestoreapi.com/products");
    const [loading, setLoading] = useState(false);
    const [Posts, setPosts] = useState([]);

    // this happens automatically:
    // When checkbox is checked → checked === true
    // When checkbox is unchecked → checked === false
    // React updates the value in formData state accordingly, like:
    const [formData, setData] = useState({ electronics:false,jewelery:false,"men's clothing":false,"women's clothing":false });
    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }
        catch {
            console.log("data note found");
            setPosts([]);
        }
        setLoading(false);
    }

    // useEffect Without Dependencies (Runs on Every Render)
    // This runs fetchProductData() on every render, causing an infinite loop of API calls.

    // useEffect With an Empty Dependency Array [] (Runs Once)
    // When the component first renders, React executes fetchProductData().

    // Since [] (the dependency array) is empty, the effect does not run again on re-renders.
    // With dependencies ([someValue]) → Runs when someValue changes.
    useEffect(() => {
        fetchProductData();
    // }, [setApiUrl])
    // Why it's wrong:
// You're watching setApiUrl for changes — but React’s state setters like setApiUrl never change, so this effect never re-runs when the actual API_URL changes.
// You meant to watch API_URL, not setApiUrl.
}, [API_URL]); 

   function handlecategory(e) {
        const { name, checked } = e.target;
        let flage=false;
       setData((prev)=>{
            const updatedState = {};

            // Set all categories to false
            for (let key in prev) {
            if(prev[key]===true && key===name){
                flage=true;
            }else{
                updatedState[key] = false;
            }
               }
                    
            // Set only the selected one to true
            updatedState[name] = checked;
            
                  // if we click o the smae then defalut all product will be shpown
           if(!flage){
            setApiUrl(`https://fakestoreapi.com/products/category/${name}`);
           }else{
            setApiUrl(`https://fakestoreapi.com/products`);
           }

            return updatedState;
           
                });
      }
      
      
    return (
//         <li onClick={handleClick('a')}>a</li> // ❌ here we are calling the function direct;y so its not work use the arrao function
// You're calling handleClick('a') immediately when the component renders, not when the user clicks.
        <>
        <div className='flex justify-center box-border'>
            <ul className='grid md:grid-cols-4 grid-cols-2 w-[70%] pt-[20px] place-items-center cursor-pointer'>
          <li className='flex gap-1'> <input type="checkbox" id="men's clothing" name="men's clothing" checked={formData["men's clothing"]} onChange={handlecategory} />
            <label htmlFor="men's clothing" className='font-bold'>Men</label>
            </li> 
          <li className='flex gap-1'> <input type="checkbox" id="women's clothing" name="women's clothing" checked={formData["women's clothing"]} onChange={handlecategory} />
            <label htmlFor="women's clothing" className='font-bold'>Women</label>
            </li> 
          <li className='flex gap-1'> <input type="checkbox" id="jewelery" name="jewelery" checked={formData.jewelery} onChange={handlecategory} />
            <label htmlFor="jewelery" className='font-bold'>Jewelery</label>
            </li> 
          <li className='flex gap-1'> <input type="checkbox" id="electronics" name="electronics" checked={formData.electronics} onChange={handlecategory} />
            <label htmlFor="electronics" className='font-bold'>Electronics</label>
            </li> 
                </ul>
        </div>
        <div>
            
            
            {
           loading ? (<Spinner />) : Posts.length > 0 ? (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[90vh]'>{Posts.map((post) => (<Product key={post.id} post={post}></Product>))}</div>) : (<div className='flex justify-center items-center'> <p> NO DATA </p></div>)}
       </div>
        </>
       
    );
};

export default Home;
