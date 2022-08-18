import React, { useContext } from 'react'
import Img3 from '../../img/img3.jpg'
import "./about.css"
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context'
export const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  
   <>

   <Link to='/'>
                <h4 className='text' style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>BACK</h4>
            </Link>
   
   <div className='about' style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
   
     <div className='about-left'>
     
     
       <div className='bg'></div>
      
         <div className='about-card'>
           <img src={Img3} alt="picture" className='about-img' />
         </div>
        
         </div>
        
         <div className='about-right'>
           <h1 className='about-title'>About me</h1>
           <p className='about-subtitle'>I am a former personal trainer and a property manager who
    found her dream profession in web development</p>
    <p className='about-description'>Just starting my software development 
    journey. Although I hold a BSc in Computer science I am focused on 
    front-end development and after gaining enough experience want to progress into
    back-end as well. Love creating user interfaces and also enjoy working on the logic.
    My skills are: HTML, CSS, JavaScript, React/Redux, MongoDB, SQL,
    Python/Pandas, Java, RESTful APIs, cloud technologies, git/github.
    Constantly developing new skills and taking new  web development courses</p>
         </div>
      
     </div>
   
   
   </>
  )
}
