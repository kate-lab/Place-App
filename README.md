
# Bon Voyage!
![world](https://res.cloudinary.com/dysirhng8/image/upload/v1637247544/travel%20app/favicon_hta8um.ico) 
## Overview

Built in a two day paired hackathon, this application lets users explore the world. This front-end React.js app pulls data from the [Road Goat API](https://developer.roadgoat.com/#introduction) using Axios requests to display up to date information about places around the world.

Built by [Iury Liberato](https://github.com/iuryliberato) and [Kate Westbrook](https://github.com/kate-lab)!

## Brief

Our brief for this project was to build a React.js app that uses data from an external API (of our choice) to display information in an engaging and useful way. We had free range over which API we wanted to choose, but we had to choose one that had clear documentation and that was freely accessible.

## Planning

We started by establishing the key features we needed as our minimum viable product:
- Destinations index grid.
- Destination card to be displayed in a grid.
- Individual destination page.
- Home page.
- Navbar.

We then put together our wireframes, considering how each component would be built, the functions each page would need, which data endpoints were needed, the HTML layout and how the user would navigate through the site. The red arrows are reminders of flex directions and the post-it shows the URL of the page.

Homepage
![homepage](https://res.cloudinary.com/dysirhng8/image/upload/v1636631771/travel%20app/Travel_app_1_h8wa7t.png)


Destination Index
![destination index](https://res.cloudinary.com/dysirhng8/image/upload/v1636631769/travel%20app/Travel_app_2_dbem1y.png)


Individual Destination
![individual destination](https://res.cloudinary.com/dysirhng8/image/upload/v1636631767/travel%20app/Travel_app_3_ir2mur.png)

## Approach taken

As we had limited time to create the app, we decided to pair code the setup of the React app and the main components, and then worked on some individual features during the evening, including some of the CSS styling final touches.

My main focus was developing the filterable Destination Index, so I spent some time working out how to reduce an array of destinations dependent on what a user entered as a search term. This involved setting the search term based on whatever is entered into the search box, making an axios request to the Roadgoat API's auto_complete endpoint (a great feature!) based on this search term and then setting the destinations based on the data that is returned from the endpoint.

```
const [destinations, setDestinations] = useState([])
const [search, setSearch] = useState('')
const [error, setError] = useState(false)

useEffect(() => {

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search ? search : 'New'}`,
        {
          headers: {
            Authorization: 'Basic MDNmMGQ2NGIzNmM0YWIyYzg2NzNiZjM2NWVmZmViNDI6OGY2OGU4OWM1ZDM1MmRhN2MzNGJmMmU3NzVhMDQ3Njg=',
          },
        }
      )
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
  ```
  
The destinations set by this search were then mapped in to the grid as destination cards (including error handling as we found working with an API, sometimes the data takes a moment to load in so it's good to show the user that the page is loading or if there has been an error):

```
  return (

    <section className="search-body text-center">
      
      <div className='search-functions destinationBar'>
        <p className='destinationSearch'>
          Find your favourite place: 
          <input type='text' placeholder='Where do you want to go?' id='search-field' onInput={handleSearch}></input>
        </p> 
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

```

I also built in some bootstrap elements to ensure the display of all destinations and individual destination display looked effective in the minimal time we had. We worked together on working out some of the paths for data and data relationships, digging down into the data to display the key information for each destination, both in the index page but also in a more detailed way on the individual destination page.


## API requests

The Road Goat API is a really rich resource with a lot of information - a lot of which is generated by users and pulled from other APIs such as COVID safety data so it is really dynamic and up to date. It had two endpoints to make GET requests to - the all destinations endpoint and an individual destination by its id, which was really useful for getting a populated piece of data with more information for each destination.

We kept the site super simple so all of this information in the Road Goat database could be the star of the show!

## Project Wins and Key Learnings

- Making a fully working app in such a short space of time.
- Complicated data requests with embedded and referenced relationships.
- Conditional CSS for different datasets - for example the user rating font color changes depending on whether it is good or bad. Same for the COVID, Safety and Budget badges.
- Really getting to grips with using an external API to make requests.

## Project Challenges

The main challenge was using a complex AP that was sometimes quite difficult to drill down into. We really felt the richness of the data was so useful and engaging that it was eventually worth the struggle though! It also helped us understand what makes a good database, which was useful for our next project, which was a full stack application.

## Final outcome

We managed to achieve what we wanted to with this project, even in the short space of time we had. We kept it simple and were very happy with the results. 

To run server with code locally: yarn start.

To demo the project, head to our [Netlify link](https://kateandiuryplaceapp.netlify.app/).

![homepage](https://res.cloudinary.com/dysirhng8/image/upload/v1637247791/travel%20app/Screenshot_2021-11-18_at_15.01.22_lhaccx.png)
![destination index](https://res.cloudinary.com/dysirhng8/image/upload/v1637247790/travel%20app/Screenshot_2021-11-18_at_15.02.14_ef87zv.png)
![individual destination page](https://res.cloudinary.com/dysirhng8/image/upload/v1637247791/travel%20app/Screenshot_2021-11-18_at_15.02.53_s0asry.png)
