import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DestinationCard from './DestinationCard'

const DestinationSearchPage = () => {
  const [loading, setLoading] = useState(false)
  const [destinations, setDestinations] = useState([])
  // const [destination, setDestination] = useState('')
  const [search, setSearch] = useState('')

  const [error, setError] = useState(false)


  useEffect(() => {
    const getData = async () => {
      try {
        if (search) {
          setLoading(true)
          const { data } = await axios.get(
            `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search}`,
            {
              headers: {
                Authorization: 'Basic NDMwNTVhZTIwNzM3Mzk0NzlkZjhmNjZhM2ZiYTQxMWI6N2E3YzcwY2RlNTY0MWQ1YWQwMDBmMzQ2ZDBhN2E5NzM=',
              },
            }
          )
          setLoading(false)
          setDestinations(data.data)
          console.log(data.data)
        }
      } catch (error) {
        setError(true)
      }
    }
    getData()
  }, [search])



  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
    // destinations.filter(destination => {
    //   if (destination.name.toLowerCase().includes(search)) {
    //     return true
    //   }
    // })
  }


  return (
    <div className="search-body">
      <section className='search container'>

        <div className='search-functions col col-12 '>
          <h2>Search Destinations</h2>
          {/* search field */}
          <input type='text' placeholder='your destination' id='search-field' onInput={handleSearch}></input>
        </div>
        <div className='searched-destinations'>

          {loading ? <h2 className='display-5 text-center'> Loading...</h2> : (
            <div className='row gx-1'>

              {!error ?
                destinations.map(destination => {
                  return <DestinationCard key={destination.id} destination={destination} />
                })
                :
                <h2 className='display-5 text-center'> Something went wrong!</h2>
              }


            </div>
          )}

        </div>
      </section>
    </div>
  )
}




export default DestinationSearchPage