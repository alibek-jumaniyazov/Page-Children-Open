import { createContext, useEffect, useState } from "react";
import { getNews } from "./api";

const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [news, setNews] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const getAll = async () => {
            try {
                const getAllNews = await getNews()
                setNews(getAllNews.articles);
                setLoader(true)
            }
            catch (err) {
                console.log(err);
                setLoader(false)
            }
        }
        getAll();
    }, [])


    const value = {
        news,
        loader
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider };