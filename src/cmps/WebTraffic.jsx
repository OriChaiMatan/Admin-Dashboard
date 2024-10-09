import React, { useState } from 'react'
import CardFilter from './CardFilter'
import WebTrafficChart from './WebTrafficChart'

function WebTraffic() {

    const [filter, setFilter] = useState('Today')

    const handleFilterChange = filter => {
        setFilter(filter)
    }

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body pb-0">
                <h5 className="card-title">
                    Website Traffic <span>|</span> {filter}
                </h5>
                <WebTrafficChart />
            </div>
        </div>
    )
}

export default WebTraffic