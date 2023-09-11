import React from 'react'
import './styles.scss'

const Button = ({ text, bgColor, full}) => {
    return (
        <div className='button' style={{ backgroundColor: bgColor, width: full ? '100%' : '181px' }}>
            <p className='text-button'>{text}</p>
        </div>
    )
}

export default Button;