import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl"
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [Loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        //in the url we are giving th epage number and the base url thats why we do this 
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (err) {
            console.log("Error in fetching Data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }








    // inside the value we are sending the all data so every component can access it
    const value = {
        posts,
        setPosts,
        Loading,
        setLoading, page, setPage,totalPages, setTotalPages, fetchBlogPosts, handlePageChange
    };

    // its an synts to provide the data to child
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}