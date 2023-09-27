import React, { useState } from 'react'
import logo from './images/logo.svg'
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  
  const [variable,setvariable] = useState(false);

  function button(e)
  {
    e.preventDefault();
    (variable === true)? setvariable(false) : setvariable(true)
  }
  
  return (
    <>
    <header>
        <div className='logo'>
            <a href=''><img src={logo}></img></a>
        </div>

        <ul className='modal'>
            <a href=''><li>Modal S</li></a>
            <a href=''><li>Modal 3</li></a>
            <a href=''><li>Modal X</li></a>
            <a href=''><li>Modal Y</li></a>
            <a href=''><li>Solar Roof</li></a>
            <a href=''><li>Solar Panels</li></a>

        </ul>

        <ul className='menu'>
            <a href=''><li>Shop</li></a>
            <a href=''><li>Account</li></a>
            <a onClick={button} href=''><li>Menu</li></a>
        </ul>
        
    </header>

    <ul className={`sidebar ${variable == true ? 'active' : ''}`}>
        <a onClick={button} id='close' href=''> < CloseIcon/> </a>
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
