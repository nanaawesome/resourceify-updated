import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import Header from "./components/common/heading/Header";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/home/Home"
import IGCSE from "./components/IGCSE/IGCSE"
import Alevel from "./components/Alevel/Alevel"
import IBDP from "./components/IBDP/IBDP"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"



const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}

      <Router>
         <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/IGCSE" exact component={IGCSE}/>
          <Route path="/Alevel" exact component={Alevel}/>
          <Route path="/IBDP" exact component={IBDP}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>
        <Footer />

      </Router>
    </>
  )
}

export default App