import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homeBody">
      <div className='hero'>
        <h1>Bon Voyage!</h1>
        <h4> “Live with no excuses and travel with no regrets” </h4>
        <Link to='/destinations' className='btn'>Search your Destination</Link>
      </div>
    </div>
  )
}

export default Home