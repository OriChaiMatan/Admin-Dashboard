import React from 'react'
import '../style/header.css'

import Logo from './Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'

function Header() {
    return (
        <header id='header' className='header fixed-top d-flex aling-items-center'>
            <Logo />
            <SearchBar />
            <Nav />
        </header>
    )
}

export default Header