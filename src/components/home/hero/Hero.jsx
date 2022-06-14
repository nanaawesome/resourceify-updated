import React from 'react'
import "./hero.css"
import Title from "../../common/title/Title"
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle="WELCOME TO RESOURCEIFY" title="Best resource hub"/>
            <p>Your best resource locator to aid you in successfully completing your IGCSE, A levels or IB Diploma</p>
            <div className="button">
              <button className="primary-btn"><Link to="/igcse">EXPLORE THE RESOURCES</Link><i className="fa fa-long-arrow-alt-right"></i></button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
      
      
    
    </>
  )
}

export default Hero