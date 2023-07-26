import React, { useState } from 'react'
import logo from './images/logo.svg'
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  
  const [variable,setvariable] = useState(false);

  function openbtn(e)
  {
    e.preventDefault();
    // (variable)? variable.style={right: 0} : console.log('open');
  }
  function closebtn(e)
  {
    e.preventDefault();
    // (variable)? variable.style={ width : 0 } : console.log('g');
  }
  return (
    <>
    <header>
        <div className='logo'>
            <img src={logo}></img>
        </div>

        <ul>
            <a href=''><li>Modal S</li></a>
            <a href=''><li>Modal 3</li></a>
            <a href=''><li>Modal X</li></a>
            <a href=''><li>Modal Y</li></a>
            <a href=''><li>Solar Roof</li></a>
            <a href=''><li>Solar Panels</li></a>

        </ul>

        <ul>
            <a href=''><li>Shop</li></a>
            <a href=''><li>Account</li></a>
            <a onClick={openbtn} href=''><li>Menu</li></a>
        </ul>
        
    </header>

    <ul className='sidebar'>
        <a onClick={closebtn} id='close' href=''> < CloseIcon/> </a>
        <a href=''><li>Modal S</li></a>
        <a href=''><li>Modal 3</li></a>
        <a href=''><li>Modal X</li></a>
        <a href=''><li>Modal Y</li></a>
        <a href=''><li>Solar Roof</li></a>
        <a href=''><li>Solar Panels</li></a>
        <a href=''><li>Existing Inventory</li></a>
        <a href=''><li>Used Inventory</li></a>
        <a href=''><li>Trade In</li></a>
        <a href=''><li>Test Drive</li></a>
        <a href=''><li>Powerwall</li></a>
        <a href=''><li>Commercial Energy</li></a> 
      </ul>
  </>
  )
}

export default Header
