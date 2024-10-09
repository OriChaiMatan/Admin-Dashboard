import React, { useState } from 'react'
import '../style/news.css'
import CardFilter from './CardFilter'
import NewsPostItem from './NewsPostItem'
import img1 from '../assets/img/news-1.jpg'
import img2 from '../assets/img/news-2.jpg'
import img3 from '../assets/img/news-3.jpg'
import img4 from '../assets/img/news-4.jpg'
import img5 from '../assets/img/news-5.jpg'

function News() {

    const news = [
        {
            "_id": 1,
            "img": img1,
            "title": "Nihil blanditiis at in nihil autem",
            "subtitle": "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
            "category": "abc"
        },
        {
            "_id": 2,
            "img": img2,
            "title": "Quidem autem et impedit",
            "subtitle": "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande",
            "category": "abc"
        },
        {
            "_id": 3,
            "img": img3,
            "title": "Id quia et et ut maxime similique occaecati ut",
            "subtitle": "Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam",
            "category": "abc"
        },
        {
            "_id": 4,
            "img": img4,
            "title": "Laborum corporis quo dara net para",
            "subtitle": "Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder",
            "category": "abc"
        },
        {
            "_id": 5,
            "img": img5,
            "title": "Et dolores corrupti quae illo quod dolor",
            "subtitle": "Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius",
            "category": "abc"
        }
    ]

    const [filter, setFilter] = useState('Today')

    const handleFilterChange = filter => {
        setFilter(filter)
    }

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body pb-0">
                <h5 className="card-title">
                    News &amp; Updates <span>|</span> {filter}
                </h5>
                <div className="news">
                    {news &&
                        news.length > 0 &&
                        news.map((item) => <NewsPostItem key={item._id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default News