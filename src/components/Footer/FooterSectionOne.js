import React from 'react';
import './FooterSectionOne.css';
import { dataArray } from '../../utils/dummyData';
import FooterLastSection from './FooterLastSection';
import FooterSectionTwo from './FooterSectionTwo';
import ArrowIcon from '../../assests/arrowIcon.svg'
const FooterSectionOne = () => {
    return (
        <div className='footer-container'>
            <div className='footer-mobile-div-container'>
                <div className='footer-heading-container'>
                    <p className='heading-fitness'>FITNESS</p>
                    <img src={ArrowIcon}/>
                </div>
                <div className='footer-heading-container'>
                    <p className='heading-fitness'>SPA</p>
                    <img src={ArrowIcon}/>
                </div>
                <div className='footer-heading-container'>
                    <p className='heading-fitness'>TONIC HOUSE</p>
                    <img src={ArrowIcon}/>
                </div>
                <div className='footer-heading-container'>
                    <p className='heading-fitness'>ABOUT S&T</p>
                    <img src={ArrowIcon}/>
                </div>
            </div>

            <div className='footer-section-div-container'>
                {dataArray.map((serviceData) => (
                <div className='service-container'>
                    <ul className='unorder-list-container'>
						<>
						<p className='service-heading'>{serviceData?.name}</p>
						{serviceData.data.map((service) => (
                        <li key={service} className='service-label'>
                            {service}
                        </li>))}
                        </>
                    </ul>
                </div>
                ))}
            </div>
			<FooterSectionTwo />
			<div className='footer-last-section-alignment'>
			<FooterLastSection />
			</div>	
			
        </div>
      )
}

export default FooterSectionOne