import React from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import DestinationSearchPage from './components/DestinationSearchPage'
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
            <DestinationSearchPage />
          </Route>
          <Route path='/destinations/:id'>
            <SingleDestination />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )


}

export default App
