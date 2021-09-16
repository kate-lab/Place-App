import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => {
  console.log(destination)

  const { attributes, id } = destination

  // const photoId = destination.relationships.featured_photo.data.id

  // const imageSrc = destination.included.find(item => item.id === photoId)
  // console.log(destination)
  return (
    <div className='destination-card col-12 col-md-6 col-lg-4 p-3'>
      <h4>{attributes.name}</h4>
      <h6>Visitor Rating:</h6>
      <h2> {attributes.average_rating} </h2>
      <h6>Destination type:</h6>
      <h2> {attributes.destination_type} </h2>
      {/* {imageSrc && (
        <img src={imageSrc.relationships.image.full}></img>
      )} */}
      <p>
        <Link to={`/destinations/${id}`}>Find out more about {attributes.name}</Link>
      </p>
    </div>
  )
}

export default DestinationCard