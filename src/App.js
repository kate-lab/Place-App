import React from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Home from './components/Home'
import DestinationSearch from './components/DestinationSearch'
import SingleDestination from './components/SingleDestination'

function App() {
  
  return (
    <div className='site-wrapper'>
      <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/destinations'>
            <DestinationSearch />
          </Route>
          <Route path='/destinations/:searchTerm'>
            <SingleDestination />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )


}

export default App
