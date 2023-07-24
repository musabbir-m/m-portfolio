import React from 'react'
import{BsGithub, BsLinkedin} from 'react-icons/bs';
import{FaFacebook} from 'react-icons/fa'

const SocialMedia = () => {
  return (
   <div className='app__social'>

    
    <a href="https://www.linkedin.com/in/mdmusabbir/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
    <a href="https://github.com/musabbir-m" target='_blank' rel="noreferrer"><BsGithub/></a>
    <a href="https://web.facebook.com/profile.php?id=100079670619646" target='_blank' rel="noreferrer"><FaFacebook/></a>
    
    
   </div>
  )
}

export default SocialMedia