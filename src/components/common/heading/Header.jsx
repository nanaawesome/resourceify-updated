import React, { useState } from 'react';
import Head from './Head';
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
        <Head />
        <header>
          <nav className="flexSB">
            <ul className={click ? "mobile-nav" : 'flexSB'} onClick={()=>setClick(false)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/igcse">IGCSE</Link></li>
              <li><Link to="/alevel">A LEVEL</Link></li>
               <li><Link to="/ibdp">IBDP</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="start">
              <div className="button"><Link to="/contact">SUGGEST A RESOURCE</Link></div>
            </div>
            <button className="toggle" onClick={()=>setClick(!click)}>{click ? <i className="fa fa-times"></i>:<i className="fa fa-bars"></i>}</button>
          </nav>
        </header>
    </div>
  )
}

export default Header