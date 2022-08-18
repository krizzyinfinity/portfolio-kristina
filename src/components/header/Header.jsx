import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import { Close, MenuOutlined } from '@material-ui/icons';

export const Header = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active)
  }
  return (
    <div className='header'>
        <div className='logo'>
            <h1>My portfolio</h1>
            
        </div>
        <nav className={active ? 'navbar active' : 'navbar'}>
            <ul>
            <div className='closed'>
            <Close className='close' onClick={showMenu} />
          </div>
                <li><Link  to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/portfolioList'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                
            </ul>
        </nav>
        <div className='changer'>
        <MenuOutlined className='menu' onClick={showMenu} />

      </div>
    </div>
  )
}
