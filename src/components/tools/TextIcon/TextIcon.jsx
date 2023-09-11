import {  } from 'react'
import './styles.scss'



const TextIcon = ({ text, type, icon}) => {

    
    return (
        <div className={`text-icon ${type === 'reverse' ? 'reverse' : ''}`}>      
            {type !== 'reverse' && icon}
            <p>{text}</p>
            {type === 'reverse' && icon}
        </div>
    )
}









export default TextIcon