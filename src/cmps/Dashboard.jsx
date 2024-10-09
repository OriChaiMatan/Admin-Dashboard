import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import Card from './Card';
import Reports from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';

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
                        <div className="col-12">
                            <RecentSales />
                        </div>
                        <div className="col-12">
                            <TopSelling />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <RecentActivity />
                    <BudgetReport />
                </div>
            </div>
        </section>
    )
}

export default Dashboard