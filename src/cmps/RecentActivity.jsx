import React, { useState } from 'react'
import CardFilter from './CardFilter'
import RecentActivityItem from './RecentActivityItem'
import '../style/recent-activity.css'

function RecentActivity() {
    const recentactiviy = [
        {
            "_id": 1,
            "time": "32 min",
            "color": "text-success",
            "content": "Quia quae rerum explicabo officiis beatae",
            "highlight": "explicabo officiis"
        },
        {
            "_id": 2,
            "time": "56 min",
            "color": "text-danger",
            "content": "Voluptatem blanditiis blanditiis eveniet",
            "highlight": ""
        },
        {
            "_id": 3,
            "time": "2 hrs",
            "color": "text-primary",
            "content": "Voluptates corrupti molestias voluptatem",
            "highlight": ""
        },
        {
            "_id": 4,
            "time": "1 day",
            "color": "text-info",
            "content": "Tempore autem saepe occaecati voluptatem tempore",
            "highlight": "occaecati voluptatem"
        },
        {
            "_id": 5,
            "time": "2 days",
            "color": "text-warning",
            "content": "Est sit eum reiciendis exercitationem",
            "highlight": ""
        },
        {
            "_id": 6,
            "time": "4 weeks",
            "color": "text-muted",
            "content": "Dicta dolorem harum nulla eius. Ut quidem quidem sit quas",
            "highlight": ""
        }
    ]

    const [filter, setFilter] = useState('Today')

    const handleFilterChange = filter => {
        setFilter(filter)
    }

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Recent Activity <span>|</span> {filter}
                </h5>
                <div className="activity">
                    {recentactiviy &&
                        recentactiviy.length > 0 &&
                        recentactiviy.map((item) => (
                            <RecentActivityItem key={item._id} item={item} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default RecentActivity