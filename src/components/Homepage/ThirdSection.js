import React from 'react';
import './ThirdSection.css';
import ButtonElement from '../../utils/ButtonElement';
import { data } from '../../utils/dummyData';
import ArrowIcon from '../../assests/arrowIcon.svg'

const ThirdSection = () => {
    const displayCount = 6;
    const isOverFlow = data.length > displayCount;
    const displayData = data.slice(0, displayCount);
    const overFlowCount = data.length-displayCount;

  return (
    <div className='third-section-div-container'>
        <div className='third-first-section'>
          <div className='first-part-third-section'>
           <p className='first-part-paragraph-third-section'>WELLNESS & SPA SERVICES</p>
            <p className='first-part-third-section-heading'>TAKE WELLNESS & RECOVERY 
            TO A WHOLE NEW LEVEL</p>
            <p className='first-part-paragraph-two'>Full-service premium amenities. Just bring you, and we do the rest!</p>
            <ButtonElement 
            label="EXPLORE SPA & WELLNESS"
            height="45px" 
            width="240px"
            borderRadius="2px"
            border='none'
            fontSize='12px'
            borderColor='#ffff'
            borderStyle="solid"
            />
          </div>
        </div>
        <div className='second-section-list-items'>
            <div className='unorder-list-container-third-section'>
            <ul>
                {displayData.map((item) => (
                    <li key={item.id} className='list-items'>
                        {console.log(item.label)}
                        <hr className='horizontal-line-third-section'/>
                        <div className='list-div-contianer'>
                        <span className='list-item-label'>{item.label}</span>
                        {item.secondlabel && <span className='list-item-label'>{item.secondlabel}</span>}
                        </div>
                    </li>
                ))}
            </ul>
            <div>
            <hr className='horizontal-line-third-section'/>
            <div className='list-div-contianer'>
            {isOverFlow && <span className='list-item-label'>+{overFlowCount}MORE</span>}
            <span className='arrow-element'>
                SEE ALL SERVICES 
                <img src={ArrowIcon} alt='services' className='arrow-icon'/>
            </span>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection