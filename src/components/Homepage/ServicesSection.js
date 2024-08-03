import React from 'react';
import ServiceImg from '../../assests/Rectangle 76.png';
import ServiceImgTwo from '../../assests/Rectangle 77.png'
import './ServicesSection.css';
import CheckIcon from '../../assests/check.png'

const ServicesSection = () => {
  return (
    <div>
        <h1 className='main-heading'>GEOSIST LOCATIONS</h1>
        <div className='services-section-div-container'>
            <div className='services-first-div-container'>
                <div className='image-container'>
                <img src={ServiceImg} alt='servises-first-section-img'/>
                </div>
                <div className='servises-section-second-div-container'>
                    <div className='services-details-section'>
                        <h1 className='services-section-heading'>
                            THE WELL
                        </h1>
                        <p className='services-section-para'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                        <p className='services-section-last-para'>486 Front St W, Toronto, ON M5V 0V2647-372-0225</p>
                    </div>
                    <div className='exclusive-services-section'>
                        <p className='exclusive-services-heading'>EXCLUSIVE SERVICES:</p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service1' className='check-icon'/>  Service 1
                        </p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service2' className='check-icon'/>  Service 2
                        </p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service3' className='check-icon'/>  Service 3
                        </p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service4' className='check-icon'/>  Service 4
                        </p>
                    </div>
                </div>
            </div>
            <div className='services-first-div-container'>
                <div className='image-container'>
                    <img src={ServiceImgTwo} alt='servises-first-section-img' />
                </div>
                <div className='servises-section-second-div-container'>
                    <div className='services-details-section'>
                        <h1 className='services-section-heading'>
                            THE WELL
                        </h1>
                        <p className='services-section-para'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                        <p className='services-section-last-para'>486 Front St W, Toronto, ON M5V 0V2647-372-0225</p>
                    </div>
                    <div className='exclusive-services-section'>
                        <p className='exclusive-services-heading'>EXCLUSIVE SERVICES:</p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service1' className='check-icon'/>  Service 1
                        </p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service2' className='check-icon'/>  Service 2
                        </p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service3' className='check-icon'/>  Service 3
                        </p>
                        <p className='exclusive-services-para'>
                        <img src={CheckIcon} alt='service4' className='check-icon'/>  Service 4
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection