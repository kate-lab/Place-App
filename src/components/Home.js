import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-body">
      <section className='hero container'>
        <div className='center'>
          <h1>Bon Voyage!</h1>
          <h4> “Live with no excuses and travel with no regrets” </h4>
        </div>
        <Link to='/destinations' className='btn btn-danger'>Search your Destination</Link>
      </section>
    </div>
  )
}

export default Home