import React from 'react';
import './Footer.css';
import { dataArray } from '../../utils/dummyData';

// const fitnessData = ['Spin', 'Yoga', 'HITT', 'All Classes'];
// const spaData = ['Restore & Recover', 'Infrared Sauna', 'Somadome Meditation', 'All Spa & Wellness Services'];
// const tonicHouseData = ['Workspace', 'Bar & Cafe', 'Space Rental', 'Upcoming Events'];
// const about = ['OurStory', 'Locations', 'FAQ']

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='div-container'>
            {dataArray.map((serviceData) => (
            <div className='service-container'>
                <ul className='unorder-list-container'>
                    <>
                    <p className='service-heading'>
                    {serviceData?.name}
                    </p>
                   {serviceData.data.map((service) => (
                    <li key={service} className='service-label'>
                        {service}
                    </li>
                ))}
                    </>
                </ul>
            </div>
            ))}
            {/* <div className='service-container'>
                <ul className='unorder-list-container'>
                <p className='service-heading'>
                    FITNESS
                </p>
                    {fitnessData.map((service) => (
                        <li key={service} className='service-label'>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='service-container'>
                <ul className='unorder-list-container'>
                <p className='service-heading'>
                    FITNESS
                </p>
                    {fitnessData.map((service) => (
                        <li key={service} className='service-label'>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='service-container'>
                <ul className='unorder-list-container'>
                <p className='service-heading'>
                    FITNESS
                </p>
                    {fitnessData.map((service) => (
                        <li key={service} className='service-label'>
                            {service}
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    </div>
  )
}

export default Footer