import React, { useState } from 'react'
import '../style/recent-sales.css'
import CardFilter from './CardFilter'
import RecentSalesTable from './RecentSalesTable'

function RecentSales() {

    const recentsales = [
      {
        "_id": 1,
        "number": "#2457",
        "customer": "Brandon Jacob",
        "product": "At praesentium minu",
        "price": 64,
        "status": "Approved"
      },
      {
        "_id": 2,
        "number": "#2147",
        "customer": "Bridie Kessler",
        "product": "Blanditiis dolor omnis similique",
        "price": 47,
        "status": "Pending"
      },
      {
        "_id": 3,
        "number": "#2049",
        "customer": "Ashleigh Langosh",
        "product": "At recusandae consectetur",
        "price": 147,
        "status": "Approved"
      },
      {
        "_id": 4,
        "number": "#2644",
        "customer": "Angus Grady",
        "product": "Ut voluptatem id earum et",
        "price": 67,
        "status": "Rejected"
      },
      {
        "_id": 5,
        "number": "#3592",
        "customer": "Raheem Lehner",
        "product": "Sunt similique distinctio",
        "price": 135,
        "status": "Approved"
      }
    ]

    const [filter, setFilter] = useState('Today')

    const handleFilterChange = filter => {
        setFilter(filter)
    }

  return (
    <div className="card recent-sales overflow-auto">
  <CardFilter filterChange={handleFilterChange} />
  <div className="card-body">
    <h5 className="card-title">
      Recent Sales <span>|</span> {filter}
    </h5>
    <RecentSalesTable items={recentsales} />
  </div>
</div>
  )
}

export default RecentSales