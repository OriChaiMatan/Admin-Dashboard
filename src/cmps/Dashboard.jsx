import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import Card from './Card';
import Reports from './Reports';

function Dashboard() {
    const cards = [
        {
          "_id": 1,
          "name": "Sales",
          "icon": "bi bi-cart",
          "amount": 145,
          "percentage": 0.12,
          "active": true
        },
        {
          "_id": 2,
          "name": "Revenue",
          "icon": "bi bi-currency-dollar",
          "amount": 3246,
          "percentage": 0.08,
          "active": false
        },
        {
          "_id": 3,
          "name": "Customers",
          "icon": "bi bi-people",
          "amount": 1244,
          "percentage": -0.11,
          "active": false
        }
      ]

    return (
        <section className='dashboard section'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length > 0 &&
                            cards.map(card => <Card key={card._id} card={card} />)
                        }
                        <div className="col-12">
                            <Reports />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </section>
    )
}

export default Dashboard