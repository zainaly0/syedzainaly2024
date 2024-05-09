import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <nav>
        <ul className='header_nav'>
            <Link to="/english">English</Link>|
            <Link to="/urdu">Urdu</Link>
        </ul>
    </nav>
      
    </header>
  )
}

export default Header
