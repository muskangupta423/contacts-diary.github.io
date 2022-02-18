import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='header-link'>
                <Link to="/">HomePage</Link>
                <Link to="/addContact">Add Contact</Link>
            </div>
            <div className='header-search'>
                <input type='search' placeholder='Search by name...'/>
            </div>
        </div>
    )
}

export default Header