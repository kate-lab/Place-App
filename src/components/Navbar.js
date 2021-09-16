import React from 'react'
import { Link } from 'react-router-dom'
import favicon from '../assets/favicon.ico'

const Navbar = () => {
  return (
    <div className='navbar navbar-nav navbar-expand-sm bg-dark'>
      <div className="container">
        <div className='navbar-brand'>
          <Link className="logo" to='/'><img src={favicon} alt='globe' width='40px'></img></Link>
        </div>
        <dive className='navbar-nav'>
          <div className='nav-item m-2'>
            <Link className="navLink" to='/'>Home</Link>
          </div>
          <div className='nav-item m-2'>
            <Link className="navLink" to='/destinations'>Search Destinations</Link>
          </div>
        </dive>
      </div>
    </div>
  )
}

export default Navbar