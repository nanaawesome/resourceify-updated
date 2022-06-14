import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Resourceify All rights reserved</p>
      <p className="icons">
        <a href="https://www.instagram.com/na.na_y.aw/" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
        <a href="https://twitter.com/itsnyz" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
        
      </p>
      
    </div>
  )
}

export default Footer