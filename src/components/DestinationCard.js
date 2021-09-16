import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => {
  console.log(destination)

  const { attributes, id } = destination

  return (
    <div className=' col-12 col-md-6 col-lg-4 p-2'>
      <div className="destination-card p-3">
        <h4>{attributes.name}</h4>
        <h6>Visitor Rating: </h6>
        <h4><span className="badge bg-secondary"> {Math.round(attributes.average_rating * 10) / 10} /  5</span></h4>
        <h6>Destination type:</h6>
        <h2> {attributes.destination_type} </h2>

        <p>
          <Link to={`/destinations/${id}`}>Find out more about {attributes.name}</Link>
        </p>
      </div>

    </div>
  )
}

export default DestinationCard