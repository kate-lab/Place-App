import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DestinationCard from './DestinationCard'

const DestinationSearchPage = () => {
  // const [loading, setLoading] = useState(false)
  const [destinations, setDestinations] = useState([])
  // const [destination, setDestination] = useState('')
  const [search, setSearch] = useState('')

  const [error, setError] = useState(false)


  useEffect(() => {
    const getData = async () => {
      try {
        
        const { data } = await axios.get(
          `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search ? search : 'New'}`,
          {
            headers: {
              Authorization: 'Basic NDMwNTVhZTIwNzM3Mzk0NzlkZjhmNjZhM2ZiYTQxMWI6N2E3YzcwY2RlNTY0MWQ1YWQwMDBmMzQ2ZDBhN2E5NzM=',
            },
          }
        )
        // setLoading(false)
        setDestinations(data.data)
        console.log(data.data)
        
      } catch (error) {
        setError(true)
      }
    }
    getData()
  }, [search])



  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
    
  }


  return (

    <section className="search-body text-center">
      
      <div className='search-functions destinationBar'>
        <p className='destinationSearch'>Find your favourite place:  <input type='text' placeholder='Where do you want to go?' id='search-field' onInput={handleSearch}></input></p> 
      </div>
    
      <div className='searched-destinations mt-4 container'>
        <div className='row'>
          
          {destinations.length > 0 ?
            destinations.map(destination => {
              return <DestinationCard key={destination.id} destination={destination}/>
            })
            :
            <>
              {error ?
                <h2 className='display-5 text-center'> Something went wrong!</h2>
                :
                <h2 className='display-5 text-center'> Loading...</h2>
              }
            </>
          }
        </div>
      </div>
      
    </section>


  )
}




export default DestinationSearchPage