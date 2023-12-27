import React, { useContext } from 'react'
import NewsBigCard from '../Components/Home/NewsBigCard'
import NewsPage from '../Components/Home/NewsPage'
import { UserContext } from '../Context/UserContext'

export default function Home() {

  const { news ,loader } = useContext(UserContext)

  console.log(news);



  return (
    <div className='Home'>
      <div className="BigNewsCards">
        {
          loader ?
            news.splice(0, 9).map((items, index) => (
              <NewsBigCard items={items} key={index} />
            ))
            :
            <p>Loading...</p>
        }
      </div>
    </div>
  )
}
