import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='hero'>
      <h1>Place App</h1>
      <Link to='/destinations' className='btn'>Search your Destination</Link>
    </section>
  )
}

export default Home