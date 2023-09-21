import React from 'react'
import './styles.scss'

const Icon = ({ icon , size , color }) => {
  return (
    <div className='icon' style={{ color, height: `${size}px`, width:`${size}px`}}>
        {icon('var(--black-60)')}
    </div>
  )
}

export default Icon
