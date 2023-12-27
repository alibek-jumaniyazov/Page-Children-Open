import React, { useState } from 'react'
import img from '../../images/img.png'
import { Link } from 'react-router-dom'
import slugify from '../../Context/sulyg'

export default function NewsBigCard({ items, name }) {
    return (
        <Link to={`/category/${name? name : 'technology'}/${slugify(items.title)}`}>

            <div className='News-big__card'>
                <img src={items.urlToImage} alt={items.title} className='news-card__img' />
                <div className="News-card__info">
                    <p className='news-card__name'>{items.title}</p>
                    <span className='news-card__title'>{items.content}</span>
                    <div className="news-time__author">
                        <span>3 hours ago</span>
                        <p>{items.author}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
