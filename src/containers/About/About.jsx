import React,{useState, useEffect} from 'react'
import './About.scss'
import { motion } from 'framer-motion'

import {images} from '../../constants'

const abouts= [
  {title: "web developer", description: "I'm a good developer who can be great inclution to your team", imgUrl: images.about01},
  {title: "web Designer", description: "I can design ui/ux ", imgUrl: images.about02},
  {title: "web animation", description: "I can add stunning animation ", imgUrl: images.about03}
]

const About = () => {
  return (
   <>
   
   <h2 className="head-text">
    I know that 
    <span>Great Design</span>
    Means 
    <span>Great Business</span>
   </h2>

   <div className="app__profiles">

    {
      abouts.map((about,index)=>(
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className='app__profile-item'
        key={about.title+ index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2> 
          <h2 className='p-text' style={{marginTop: 10}}>{about.description}</h2> 
        </motion.div>
      ))
    }
   </div>
   </>
  )
}

export default About