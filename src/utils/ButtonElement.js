import React from 'react';
import './ButtonElement.css'

const ButtonElement = (props) => {
    const {
      label,
      color, 
      backgroundColor, 
      height, 
      width, 
      leftIcon, 
      rightIcon, 
      onClick, 
      borderRadius, 
      border, 
      borderColor, 
      borderStyle, 
      hoverCheck, 
      fontSize
    } = props

  return (
    <div>
        <button 
        type='button' 
        style={{
          color, 
          backgroundColor, 
          height, 
          width, 
          borderRadius, 
          border:border, 
          borderColor, 
          borderStyle,
          cursor: 'pointer',
          fontSize
          // textDecorationColor
          }} 
          onClick={onClick}
          >
            {leftIcon && <span><img src={leftIcon} alt={label} className='arrow-icon-align'/></span>}
            {label}
            {rightIcon && <span><img src={rightIcon} alt={label} className={hoverCheck ? 'arrow-icon-align-color': 'arrow-icon-align'}/></span>}
        </button>
    </div>
  )
}

// ButtonElement.propTypes = {
//     color: PropTypes.string,
//     backgroundColor: PropTypes.string,
//     height: PropTypes.string,
//     width: PropTypes.string,
//     label: PropTypes.string,
//     leftIcon: PropTypes.node,
//     rightIcon: PropTypes.node,
//     onClick: PropTypes.func
// }


// ButtonElement.defaultProps =
//  {
//     color: '#000000',
//     backgroundColor: '#ffff',
//     width: '118px',
//     height: '45px',
//  }

export default ButtonElement