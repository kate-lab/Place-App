import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleDestination = () => {
  const [destination, setDestination] = useState(null)
  const [hasError, setHasError] = useState(false)

  const {  attributes: { budget } , name } = destination

  const { id } = useParams()
  console.log(id)

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
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  useEffect(() => console.log(destination), [destination])

  //data.attributes.budget[${name}].text
  // const budgetInfo = Object.values(destination.data.attributes.budget)
  // console.log(budgetInfo[0])

  return (
    <div>

      {destination ?
      //if truey - has a value then return out content!:

        <div className="container mt-4">

          {destination.length > 0 ?

            <div>
              {/* <h2>{destination.data.attributes.name}</h2> */}
              <hr />
              {/* <h2>{Object.values(destination.data.attributes.budget)[0].text}</h2> */}
              <h2> Budget: {budget.name.text} </h2>
              
              {/* <h2>{destination.data.attributes.average_rating}</h2> */}
              
              {/* <h2>{destination.data.attributes.covid.text}</h2> */}
              <button to='destination.data.attribute.airbnb_url'>Find Somewhere to Stay in {name}</button>
            </div>

            :
            <>
              {hasError ?
                <h2 className='display-5 text-center'> Something went wrong!</h2>
                :
                <h2 className='display-5 text-center'> Loading...</h2>
              }
            </>
          }
        </div>
        :
        //if falsey
        <>
          {hasError ?
            <h2 className='display-5 text-center'> Something went wrong!</h2>
            :
            <h2 className='display-5 text-center'> Loading...</h2>
          }
        </>
        
      }

    </div>
  )
}

export default SingleDestination