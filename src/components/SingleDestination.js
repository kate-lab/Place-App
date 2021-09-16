import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleDestination = () => {
  const [destination, setDestination] = useState(null)



  const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const { apiData } = await axios(
          `https://api.roadgoat.com/api/v2/destinations/${id}`,
          {
            headers: {
              Authorization: 'Basic NDMwNTVhZTIwNzM3Mzk0NzlkZjhmNjZhM2ZiYTQxMWI6N2E3YzcwY2RlNTY0MWQ1YWQwMDBmMzQ2ZDBhN2E5NzM=',
            },
          }

        )

        setDestination(apiData)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [id])



  if (!destination) {
    return <h2 className='display-5 text-center'> Loading...</h2>
  }



  const { attributes: { budget, name, airbnb_url: airbnbUrl, wikipedia_url: wikipediaUrl }, relationships } = destination.data

  const knownFor = destination.included ? destination.included.filter(included => included.type === 'known_for') : []

  const photoId = relationships ? relationships.photos.data[0].id : ''

  const photoData = destination.included ? destination.included.find(included => included.type === 'photo' && included.id === photoId) : []



  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img className="img-fluid" src={photoData.attributes.image.large} alt={name} />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-5">{name}</h1>
            {knownFor.map(item =>
              <div className="badge bg-secondary me-1 mb-1" key={item.id}>
                {item.attributes.name}
                <img src={item.attributes.icon + '-48.png'} alt={item.attributes.name} />
              </div>
            )}
            <h2 className="mt-2"> Budget: {Object.values(budget)[0].text}</h2>
            <div className="d-grid gap-2 d-md-flex mt-5 justify-content-md-start">
              <a className='btn btn-primary btn-lg px-4 me-md-2' href={airbnbUrl} target="_blank" rel="noreferrer">Search on AirBnb</a>
              <a className='btn btn-light btn-lg px-4 me-md-2' href={wikipediaUrl} target="_blank" rel="noreferrer">Wikipedia</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SingleDestination