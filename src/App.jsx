import { useState } from 'react'



import {About, Footer, Header, Work, Skills, Testimonial} from './containers'
import { Navbar } from './components'
import "./App.scss"

function App() {


  return (
    <div className='app app_container'>
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
