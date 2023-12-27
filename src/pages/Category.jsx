import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import NewsBigCard from '../Components/Home/NewsBigCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Category() {
  const params = useParams()

  const [news, setNews] = useState([])
  const [loader, setloader] = useState(false)

  const getNewsContainer = async () => {
    try {
      const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${params.name}/us.json`)
      setNews(response.data.articles)
      setloader(true)
    }
    catch (err) {
      console.log(err);
      setloader(false)
    }
  }

  useEffect(() => {
    getNewsContainer()
  }, [])

  return (
    <div className='Category'>
      <div className="BigNewsCards">
      {
        loader ?
          news.splice(0, 9).map((items, index) => (
            <NewsBigCard items={items} key={index} name={params.name} />
          ))
          :
          <p>Loading...</p>
      }
      </div>
    </div>
  )
}
