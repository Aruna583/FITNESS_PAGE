import React from 'react';
import ButtonElement from '../../utils/ButtonElement';
import './Header.css';
import menuIcon from '../../../src/assests/menu.svg';
import loginIcon from '../../../src/assests/loginIcons.svg';
import HomePageIcon from '../../../src/assests/logoIconOne.svg'

const Header = () => {
  return (
    <div className='header-section'>
        <div>
            <img src={menuIcon} alt='menu-logo' className='menu-logo'/>
        </div>
        <div className='home-page-icon-one'>
        <img src={HomePageIcon} alt='home-page' className='home-page-icon'/>
        
        </div>
        <div className='login-section'>
            <div className='alignment-part'>
                <span><img src={loginIcon} alt='login-icon' className='login-icon'/></span>
                <p className='login'>LOG IN</p>
            </div>
            <div className='home-button-icon'>
            <ButtonElement 
            label="BOOK CLASSES"
            color="#ffff" 
            backgroundColor="transparent" 
            height="45px" 
            width="128px"
            border="1px"
            borderColor='#ffff'
            borderRadius="2px"
            borderStyle='solid'
            />
            </div>
            <div className='home-button-icon'>
            <ButtonElement 
            label="BUY CLASSES"
            height="45px" 
            width="128px"
            borderRadius="2px"
            border='none'
            borderColor='#ffff'
            borderStyle="solid"
            />
            </div>
        </div>
    </div>
  )
}

export default Header