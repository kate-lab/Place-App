import React from 'react'

const DestinationDetail = ({ destination }) => {


  const { attributes: { budget , safety, covid, name, airbnb_url: airbnbUrl, wikipedia_url: wikipediaUrl }, relationships } = destination.data

  const knownFor = destination.included ? destination.included.filter(included => included.type === 'known_for') : []

  const photoId = relationships ? relationships.photos.data[0].id : ''

  const photoData = destination.included ? destination.included.find(included => included.type === 'photo' && included.id === photoId) : []



  return (
    <div className='container'>
      <div className="col-xxl-8 mx-auto  place-container">
        <div className='place-wrapper'>
          <h1 className="display-5 fw-bold lh-1 p-4">{name}</h1>
          <hr />
          
          <div className='city-stats'>
            <div className='budget city-stat badge' data-status={Object.values(budget)[0].text}>
              <strong>Budget:</strong> {Object.values(budget)[0].text}
            </div>
            <div className='safety city-stat badge' data-status={Object.values(safety)[0].text}>
              <strong>Safety:</strong> {Object.values(safety)[0].text}
            </div>
            <div className='covid city-stat badge' data-status={Object.values(covid)[0].text}>
              <strong>Covid risk:</strong> {Object.values(covid)[0].text}
            </div>
          </div>
          
          <div className="city row g-5">
            <div className="col-7">
              <img className="img-fluid" src={photoData.attributes.image.large} alt={name} />
              
            </div>
            <div className="col-5 city-info">
              
              <div className='info-container'>
                <h3 > Find out more:</h3>
                <div className="d-grid gap-2 d-md-flex mt-2 justify-content-md-start">
                  <a className='btn btn-primary btn-lg px-4 me-md-2 airBnB' href={airbnbUrl} target="_blank" rel="noreferrer">Search on AirBnb</a>
                  <a className='btn btn-primary btn-lg px-4 me-md-2 wikipedia' href={wikipediaUrl} target="_blank" rel="noreferrer">Wikipedia</a>
                </div>
    
                <hr />
                <div className='known-for mt-2'>
                  
                  {knownFor.map(item =>
                    <div className="badge bg-secondary me-1 mb-1" key={item.id}>
                      {item.attributes.name}
                      <img src={item.attributes.icon + '-48.png'} alt={item.attributes.name} width='30px' />
                    </div>
                  )}
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default DestinationDetail