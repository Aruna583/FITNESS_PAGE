import React from 'react';
import Header from './Header';
import ButtonElement from '../../utils/ButtonElement';
import './HomePage.css'

const HomePage1 = () => {
  return (
    <div className='homepage'>
        <Header/>
        <div className='main-home-section'>
          <div className='main-heading-section'>
          <span className='heading'>Sweat.</span>
          <span className='heading'>recover.</span>
          <span className='heading'>connect.</span>
          <div className='button-align'>
          <ButtonElement 
            label="JOIN US"
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
          </div>
        </div>
    </div>
  )
}

export default HomePage1