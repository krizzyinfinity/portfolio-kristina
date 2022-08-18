import React from 'react'
import "./main.css"
import Img2 from '../../img/img2.png'


export const Main = () => {
  return (
    <div className='main'>
    <div className='main-left'>

      <div className='main-left-wrapper'>
        <h2 className='main-intro'>Hello my name is Kristina</h2>
        <h1 className='main-name'>Front-end React developer</h1>
      <div className='main-title'>
        <div className='main-title-wrapper'>
          <div className='item'> React developer</div>
          <div className='item'> MERN developer</div>
          <div className='item'> Cloud technology</div>
          <div className='item'> RESTful API</div>
        </div>
      </div>
      <p className='desc'>
      I work mainly in MERN stack,
               also familiar with Java OOP 
              and Python/Pandas for analyzing data. 
             Very familiar with RESTful APIs and micro services. Currently 
             focused on front-end with JavaScript/React  
      </p>
      </div>
    </div>
    <div className="main-right">
          <div className="intro-bg">  </div>
          <img src={Img2} alt="me" className='intro-img' />
      </div>
     
    
    </div>
  )
}
