import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import slugify from '../../Context/sulyg'
export default function NewsPage() {

    const params = useParams()
    const [article, setArticle] = useState([])
    const [loader , setLoader] = useState(false)

    const getNews = async () => {
        try {
            const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${params.name}/us.json`)
            let data = response.data.articles.find(item => slugify(item.title) === params.arsicle)
            setArticle(data)
            setLoader(true)
        }
        catch (err) {
            console.log(err);
            setLoader(false)
        }
    }
    useState(() => {
        getNews()
    }, [])

    console.log(article);


    return (
        <>
            {
                loader  ?

                    <div className='NewsPage'>
                        <div className="news-page__infos">
                            <p className="new-page__title">{article.title}</p>
                            <img src={article.urlToImage} alt="" />
                            <span className='news-page__desc'>{article.content} {article.description}</span>
                        </div>
                    </div>
                    :
                    <p>Loading...</p>
            }
        </>
    )
}
