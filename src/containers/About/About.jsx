import React,{useState, useEffect} from 'react'
import './About.scss'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import { urlFor, client} from '../../client'

// const abouts= [
//   {title: "Web Developer", description: "I'm a good developer who can be great inclution to your team", imgUrl: images.about01},
//   {title: "Web Designer", description: "I can design ui/ux ", imgUrl: images.about02},
//   {title: "Web Animation", description: "I can add stunning animation ", imgUrl: images.about04}
// ]

const About = () => {

  const [abouts, setAbouts]= useState([])
   console.log(abouts, "aboutsssss")
  useEffect(()=>{
     const query= `*[_type == "abouts"]`

     client.fetch(query)
     .then(data=> setAbouts(data))
  }, [])


  return (
   <>
   
   <h2 className="head-text">
    I know that <span>Great Apps</span> <br />
    Means <span> Great Business</span>
   </h2>

   <div className="app__profiles">

    {
      abouts?.map((about,index)=>(
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className='app__profiles-item'
        key={about.title+ index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2> 
          <h2 className='p-text' style={{marginTop: 10}}>{about.description}</h2> 
        </motion.div>
      ))
    }
   </div>
   </>
  )
}

export default AppWrap(About, 'about')