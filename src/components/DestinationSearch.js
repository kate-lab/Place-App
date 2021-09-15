import React, { useState , useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

const DestinationSearch = () => {

  const [destination , setDestination] = useState('')
  const [searchTerm , setSearchTerm] = useState('')

  useEffect(() => {
    const getData = async() => {
      try {
        const { data } = await axios('https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${}')
        setDestination(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const handleSearch = ()

  return (
    <section className='search-page container'>
      <h2>Search Destinations</h2>
      <div className='search-functions'>
        {/* search field and a button to input */}
        <input type='text' placeholder='your destination' id='search-field'></input>
        <button id='search-button'onClick='handleSearch'>Search for your Destination</button>
      </div>
      <div className='searched-destinations'>
        <p>this is where search results will show</p>
      </div>
    </section>
  )
}

export default DestinationSearch