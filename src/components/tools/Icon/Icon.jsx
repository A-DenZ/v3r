import React from 'react'
import './styles.scss'

const Icon = ({ icon , size , color = 'var(--black-60)' }) => {
  return (
    <div className='icon' style={{ color, height: `${size}px`, width:`${size}px`}}>
        {icon(color)}
    </div>
  )
}

export default Icon
