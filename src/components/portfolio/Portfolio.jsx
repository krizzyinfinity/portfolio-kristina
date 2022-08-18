import React, { useContext } from 'react'
import { ThemeContext } from '../../context';

import './portfolio.css'


const Portfolio = ({img, link}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
     
    
    <div className='portfolio' style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
     
      
                  
                
               
    <div className="portfolio-browser">
      <div className="portfolio-circle"></div>
      <div className="portfolio-circle"></div>
      <div className="portfolio-circle"></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt="myimg" className='portfolio-img' />
      </a>
      
      </div>
      </>
  )
}

export default Portfolio;

