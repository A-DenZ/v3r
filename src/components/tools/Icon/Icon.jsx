import React from 'react'

const Icon = (icon , size , color) => {
  return (
    <div className='icon' style={{ color, height: `${size}px`, width:`${size}px`}}>
        {icon}
    </div>
  )
}

export default Icon
