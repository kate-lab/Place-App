import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home-body">
      <div className='hero text-center position-absolute top-50 start-50 translate-middle'>
        <div className='home-container'>
          <div>
            <h1 className='display-4'>Bon Voyage!</h1>
            <p className='lead'> “Live with no excuses and travel with no regrets” </p>
          </div>
          <Link to='/destinations' className='btn btn-danger'>Search your Destination</Link>
        </div>
      </div>
    </section>
  )
}

export default Home