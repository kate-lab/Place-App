import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => {
  console.log(destination)

  const { attributes, id } = destination

  // const photoId = destination.relationships.featured_photo.data.id
  
  // const imageSrc = destination.included.find(item => item.id === photoId)
  // console.log(destination)
  console.log(Math.round(attributes.average_rating).toString())
  return (
    <div className='destination-card col-12 col-md-6 col-lg-4 gy-3'>
      <div className='card  h-100 text-center'>
        <div className='card-header align-middle'>
          <h4>{attributes.name}</h4>
        </div>
        <div className='card-text align-middle'>
          <div className='rating'>
            <h6>Visitor Rating:</h6>
            <h2 className='score' data-status={Math.round(attributes.average_rating).toString()}> {parseFloat(attributes.average_rating.toFixed(1))} </h2>
          </div>
          <div>
            <h6>Type: {attributes.destination_type} </h6>
            {/* {imageSrc && (
              <img src={imageSrc.relationships.image.full}></img>
            )} */}
            <p>
              <Link to={`/destinations/${id}`}>Find out more about {attributes.name}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard