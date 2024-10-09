import React, { useState } from 'react'
import '../style/top-selling.css'
import CardFilter from './CardFilter'
import TopSellingItem from './TopSellingItem'
import img1 from '../assets/img/product-1.jpg'
import img2 from '../assets/img/product-2.jpg'
import img3 from '../assets/img/product-3.jpg'
import img4 from '../assets/img/product-4.jpg'
import img5 from '../assets/img/product-5.jpg'

function TopSelling() {
    const topselling = [
        {
            "_id": 1,
            "preview": img1,
            "name": "Ut inventore ipsa voluptas nulla",
            "price": 64,
            "sold": 124
        },
        {
            "_id": 2,
            "preview": img2,
            "name": "Exercitationem similique doloremque",
            "price": 46,
            "sold": 98
        },
        {
            "_id": 3,
            "preview": img3,
            "name": "Doloribus nisi exercitationem",
            "price": 59,
            "sold": 74
        },
        {
            "_id": 4,
            "preview": img4,
            "name": "Officiis quaerat sint rerum error",
            "price": 32,
            "sold": 63
        },
        {
            "_id": 5,
            "preview": img5,
            "name": "Sit unde debitis delectus repellendus",
            "price": 79,
            "sold": 41
        }
    ]

    const [filter, setFilter] = useState('Today')

    const handleFilterChange = filter => {
        setFilter(filter)
    }

    return (
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body pb-0">
                <h5 className="card-title">
                    Top Selling <span>|</span> {filter}
                </h5>
                <table className="table table-borderless">
                    <thead>
                        <tr className="table-light">
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topselling &&
                            topselling.length > 0 &&
                            topselling.map((item) => (
                                <TopSellingItem key={item._id} item={item} />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TopSelling