import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="container nav-container">
        <Link className="navLink" to='/'>Home</Link>
        <Link className="navLink" to='/destinations'>Search Destinations</Link>
      </div>
    </div>
  )
}

export default Navbar