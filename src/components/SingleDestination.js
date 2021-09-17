import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DestinationDetail from './destinationDetail'
const SingleDestination = () => {
  const [destination, setDestination] = useState(null)
  const [error, setError] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `https://api.roadgoat.com/api/v2/destinations/${id}`,
          {
            headers: {
              Authorization: 'Basic NDMwNTVhZTIwNzM3Mzk0NzlkZjhmNjZhM2ZiYTQxMWI6N2E3YzcwY2RlNTY0MWQ1YWQwMDBmMzQ2ZDBhN2E5NzM=',
            },
          }

        )
        setDestination(data)
        setError(false)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }
    getData()

  }, [id])



  return (
    <>
      {destination ? 
        <section className='single-destination-body'>
          <DestinationDetail destination={destination} />
        </section>
        :
        <>
          {error ?
            <h2 className='display-5 text-center'> Something went wrong!</h2>
            :
            <h2 className='display-5 text-center'> Loading...</h2>
          }
        </>
      }
    </>
  )
}

export default SingleDestination