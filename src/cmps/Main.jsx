import React from 'react'
import '../style/main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'

function Main() {
  return (
    <main id='main' className='main'>
        <PageTitle />
        <Dashboard />
    </main>
    )
}

export default Main