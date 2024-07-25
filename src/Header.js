import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@material-ui/core';
function Header() {
  return (
    <div className='Header'>
        <div className='header__left'>
        <MenuIcon />
        <IconButton/> 

        
              <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"alt=""/>
        </div>
        <div className='header__middle'>

        </div>
        <div className='header__right'>

        </div>
    </div>
  )
}

export default Header