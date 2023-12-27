import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import { categoryList } from '../../Context/category'
import { Link, useHref } from 'react-router-dom'

export default function Header() {

    const href = useHref()
    const [activeCategoy, setArticleCategory] = useState("")

    const activeHref = href.substring(1).split("/")[1]
    useEffect(() => {
        if (activeHref) {
            setArticleCategory(activeHref)
        }
    }, [href]);

    return (
        <div className='Header'>
            <div className="header-min">
                <div className="header-logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header-category">
                    {
                        categoryList.map((items) => (
                            <Link to={`/category${items.path}`} className={items.title == activeCategoy ? 'header-category__items' : 'header-items__active'} key={items.id}>
                                {items.title}
                            </Link>
                        ))
                    }
                </div>
                <div className="header-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6011 22.4015C17.6011 17.982 14.0185 14.4009 9.60063 14.4009C5.18114 14.4009 1.6001 17.982 1.6001 22.4015V24H0V22.4015C0 18.3436 2.52016 14.8809 6.07719 13.4776C3.88345 12.244 2.40016 9.89664 2.40016 7.20047C2.40016 3.22421 5.62437 0 9.60063 0C13.5769 0 16.8011 3.22421 16.8011 7.20047C16.8011 9.89664 15.3162 12.2424 13.1224 13.4776C16.6811 14.8809 19.2013 18.3436 19.2013 22.4015V24H17.6011V22.4015ZM15.201 7.20047C15.201 4.10747 12.6936 1.6001 9.60063 1.6001C6.50762 1.6001 4.00026 4.10747 4.00026 7.20047C4.00026 10.2935 6.50762 12.8008 9.60063 12.8008C12.6936 12.8008 15.201 10.2935 15.201 7.20047Z" fill="#2A2A2A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M11.2923 20.2211C6.24673 20.2211 2.16223 16.127 2.16223 11.0911C2.16223 6.04553 6.24673 1.96105 11.2923 1.96105C16.3378 1.96105 20.4223 6.04553 20.4223 11.0911C20.4223 16.127 16.3378 20.2211 11.2923 20.2211ZM25.0642 24.1901L18.7501 17.8762C20.3839 16.079 21.3834 13.7051 21.3834 11.0911C21.3834 5.51695 16.8664 1 11.2923 1C5.71815 1 1.20117 5.51695 1.20117 11.0911C1.20117 16.6652 5.71815 21.1821 11.2923 21.1821C13.9064 21.1821 16.2802 20.173 18.0774 18.5489L24.3915 24.8631C24.5741 25.0457 24.8816 25.0457 25.0642 24.8631C25.2468 24.6708 25.2468 24.3727 25.0642 24.1901Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.02453 1.69231H22.4259C22.8803 1.69231 23.249 1.31323 23.249 0.846154C23.249 0.379077 22.8803 0 22.4259 0H1.02453C0.571814 0 0.201405 0.379077 0.201405 0.846154C0.201405 1.31323 0.571814 1.69231 1.02453 1.69231ZM22.4259 6.76923H7.60957C7.15685 6.76923 6.78644 7.14831 6.78644 7.61538C6.78644 8.08246 7.15685 8.46154 7.60957 8.46154H22.4259C22.8803 8.46154 23.249 8.08246 23.249 7.61538C23.249 7.14662 22.8803 6.76923 22.4259 6.76923ZM22.4259 13.5367H1.02453C0.571814 13.5367 0.201405 13.9158 0.201405 14.3829C0.201405 14.8499 0.571814 15.229 1.02453 15.229H22.4259C22.8803 15.229 23.249 14.8499 23.249 14.3829C23.249 13.9158 22.8803 13.5367 22.4259 13.5367ZM22.4259 20.3077H10.079C9.62624 20.3077 9.25583 20.6868 9.25583 21.1538C9.25583 21.6209 9.62624 22 10.079 22H22.4259C22.8803 22 23.249 21.6209 23.249 21.1538C23.249 20.6868 22.8803 20.3077 22.4259 20.3077Z" fill="#2A2A2A" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
