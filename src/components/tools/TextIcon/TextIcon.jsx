import {  } from 'react'

const TextIcon = ({ text, src,  }) => {

    
    return (
        <div className="text-icon">
            <img src={src} alt={text} />
            <p>{text}</p>
            <img src="" alt="" />
        </div>
    )
}

export default TextIcon