import React, { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import "../index.css";
import Product from '../Components/Product';
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [Posts, setPosts] = useState([]);
    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
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
    }, [])
    return (
        <div> {
            loading ? (<Spinner />) : Posts.length > 0 ? (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[90vh]'>{Posts.map((post) => (<Product key={post.id} post={post}></Product>))}</div>) : (<div className='flex justify-center items-center'> <p> NO DATA </p></div>)}
        </div>
    );
};

export default Home;
