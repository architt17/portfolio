import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/archit-swami-5981271b6" className='footer_logo'>@Archit Swami</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#cp_analysis'>CP Analysis</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/archit-swami-5981271b6'><BsLinkedin/></a>
        <a href='https://github.com/architt17'><FaGithub/></a>
        <a href='https://instagram.com/ar.chittttttt?igshid=ZDdkNTZiNTM='><FiInstagram/></a>
        <a href='https://twitter.com/'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; @Archit_Swami All rights reserved.</small>
        <small>   Created with ❤️ by @Archit_Swami</small>
      </div>
    </footer>
  )
}

export default footer