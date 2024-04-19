import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {About, Contact, Home, Service} from './components'
import Signup from './components/sign/signup'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<h1>Sorry the page was not Found</h1>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/contact" element={<Contact />}/>  
          <Route path="/sign" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App