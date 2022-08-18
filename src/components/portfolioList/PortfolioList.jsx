import React, { useContext } from 'react'
import './portfolioList.css'
import Portfolio from '../portfolio/Portfolio'
import {products} from '../../data'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context'


 const PortfolioList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
   
      <>
      <Link to='/'>
               <h4 className='text' style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>BACK</h4>
            </Link>
      
      <div className='portfolio-list' style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      
      
      <div className="portfolioList-text">
      
      
  
          <h1 className='portfolioList-title'>It is time to showcase my work!</h1>
          
      </div>
      <div className="portfolioList-list">
          {products.map((item) => (
            <Portfolio key={item.id} img={item.img} link={item.link}/>
          ))}
          
          
      </div>
      
      </div>
      </>
    )
  }

  export default PortfolioList;
  
  