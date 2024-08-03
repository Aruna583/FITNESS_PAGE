import React from 'react';
import "./FooterSectionTwo.css";
import ButtonElement from '../../utils/ButtonElement';
import ArrowIcon from '../../assests/Rectangle 6.png';
import LastImg from '../../assests/fsdfcew 1.png'

const FooterSectionTwo = () => {
  return (
    <div className='footer-second-section-container'>
        <div className='footer-second-section-first-part'>
            <div className='footer-second-section-address-container'>
            <div className='address-container-one'>
                <p  className='heading'>YONGE / SHUTER</p>
                <p className='paragraph'>225 Yonge Street, Toronto ON M5B 1N8647-372-0225</p>
            </div>
            <div className='address-container-two'>
                <p>OPEN:</p>
                <p>Monday – Thursday: 5:45 AM – 10 PM</p>
                <p>Friday: 5:45 AM – 9 PM</p>
                <p>Saturday: 7 AM – 7:30 PM</p>
                <p>Sunday: 7:45 AM – 9 PM</p>
            </div>
            </div>
            <div className='footer-second-section-address-container'>
            <div className='address-container-one'>
                <p className='heading'>THE WELL</p>
                <p className='paragraph'>486 Front St W, Toronto, ON M5V 0V2647-372-0225</p>
            </div>
            <div className='address-container-two'>
                <p>OPEN:</p>
                <p>Monday – Thursday: 5:45 AM – 10 PM</p>
                <p>Friday: 5:45 AM – 9 PM</p>
                <p>Saturday: 7 AM – 7:30 PM</p>
                <p>Sunday: 7:45 AM – 9 PM</p>
            </div>
            </div>
        </div>
        <div className='footer-second-section-second-part'>
           <div className='footer-input-section'>
            <h1 className='footer-input-heading'>
                LET'S GET CONNECTED
            </h1>
            <p className='footer-input-paragraph'>
            Receive news, special offers and other emails from Sweat and Tonic. Unsubscribe at any time. View our Terms and Privacy Policy.
            </p>
            <input type='text' placeholder='Name' className='input-element'/>
            <input type='email' placeholder='E-mail' className='input-element'/>
            <div className='button-alignment'>
            <button className='button-element'>SUBSCRIBE</button>
            </div>
           </div>
        </div>
        <div className='footer-second-section-second-part'>
           <div className='footer-last-section'>
            <h1 className='footer-last-heading'>
            YOUR FAVOURITE SWEAT AND TONIC CLASSES ANYTIME, ANYWHERE
            </h1>
            <div className='last-div'>
            <div className='button-alignment-new'>
            {/* <button className='last-button-element'></button> */}
            <ButtonElement 
            label="GET 7 DAYS FOR FREE"
            rightIcon={ArrowIcon}
            height='45px'
            hoverCheck
            />
            
            </div>
            <img src={LastImg} alt='last-img' className='last-img'/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default FooterSectionTwo