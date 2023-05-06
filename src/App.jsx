import { useState } from 'react'

import './App.css'
import {About, Footer, Header, Work, Skills, Testimonial} from './containers'
import { Navbar } from './components'

function App() {


  return (
    <div>
      <Navbar/>
      <Header/> 
      <About/>
      <Work/>
      <Skills/> 
      <Testimonial/> 
      <Footer/> 
    </div>
  )
}

export default App
