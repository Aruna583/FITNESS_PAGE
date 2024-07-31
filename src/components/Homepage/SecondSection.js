import React, { useState } from 'react';
import './SecondSection.css';
import ButtonElement from '../../utils/ButtonElement';
import ArrowIcon from '../../assests/arrowIcon.svg'

const SecondSection = () => {
    const [ishovered, setHover] = useState(false);
    const [divOne, setDivOne] = useState(false)
    const [divtwo, setDivTwo] = useState(false)

  return (
    <div className={ishovered ? divOne ? 'hover-div': 'hover-div-one' : 'second-section'}>
        <div className='first-part'>
           <div className='first-part-section'>
           <p className='first-part-paragraph-one'>FITNESS & WORKOUT</p>
            <span className='first-part-heading'>OVER 200 ALL INCLUSIVE CLASSES WEEKELY</span>
            <p className='first-part-paragraph-two'>Full-service premium amenities. Just bring you, and we do the rest!</p>
            <ButtonElement 
            label="BOOK CLASSES"
            height="45px" 
            width="128px"
            borderRadius="2px"
            border='none'
            borderColor='#ffff'
            borderStyle="solid"
            />
           </div>
           <hr className='line'/>
        </div>
        
        <div className='second-part'>
            <div className='second-part-one second-part-align-items'
            onMouseEnter={() => {
                setHover(false) 
                setDivOne(false) 
                setDivTwo(false)
             }}
            >
                <span className='heading-part'>YOGA</span>
                <p className='second-part-paragraph'>Find your breath, flow, and turn up the heat!</p>
                <div className='button-align'>
                <ButtonElement 
                label='JOIN US'
                rightIcon={ArrowIcon}
                backgroundColor='transparent'
                border='none'
                color="#ffff"
                borderStyle='none'
                />
                
                </div>
                
            </div>
            <div className={ishovered && divOne ? 'second-part-hover second-part-align-items' : 'second-part-one second-part-align-items'} 
            onMouseEnter={() => {
               setHover(true) 
               setDivOne(true) 
               setDivTwo(false)
            }} 
            >
            
                <h1 className={divOne ? 'heading-part-hover': 'heading-part'}>HIIT</h1>
                <p className={divOne ? 'second-part-paragraph-hover':'second-part-paragraph'}>HIIT hard while having the time of your life.</p>
                <div className='button-align'>
                    <div>
                    <ButtonElement 
                    label='JOIN US'
                    rightIcon={ArrowIcon}
                    backgroundColor='transparent'
                    border='none'
                    color={divOne ?'black' :"#ffff"}
                    borderStyle='none'
                    />
                    </div>
                    <div>
                    {divOne && <hr className='horizontal-line'/>}
                    </div>
                </div>
                
            </div>
            <div 
            className={ishovered && divtwo ? 'second-part-hover second-part-align-items' : 'second-part-one second-part-align-items'}
            onMouseEnter={() => {
                setHover(true) 
                setDivOne(false) 
                setDivTwo(true)
             }}
            >
            
                <h1 className={divtwo ? 'heading-part-hover': 'heading-part'}>RIDE</h1>
                <p className={divtwo ? 'second-part-paragraph-hover':'second-part-paragraph'}>Race past your goals and get lost in the beat.</p>
                <div className='button-align'>
                    <div>
                    <ButtonElement 
                    label='JOIN US'
                    rightIcon={ArrowIcon}
                    backgroundColor='transparent'
                    border='none'
                    color={divtwo ?'black' :"#ffff"}
                    borderStyle='none'
                    hoverCheck={ishovered && divtwo}
                    />
                    </div>
                    <div>
                    {divtwo && <hr className='horizontal-line'/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondSection