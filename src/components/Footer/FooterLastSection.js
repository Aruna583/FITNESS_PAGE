import React from 'react';
import './FooterLastSection.css';
import fb from '../../assests/fb.svg';
import insta from '../../assests/insta.svg';
import youtubeIcon from '../../assests/youtubeIcon.svg';
const FooterLastSection = () => {
  return (
    <div className='footer-last-section-container footer-last'>
      <div className='footer-icons-section'>
        <img src={fb} alt='fb'/>
        <img src={insta} alt='insta'/>
        <img src={youtubeIcon} alt='youtube'/>
      </div>
      <div>
        <div className='footer-icons-section'>
        <span>© Geosist 2023</span>
        <hr  className='horizontal-last-section'/>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default FooterLastSection