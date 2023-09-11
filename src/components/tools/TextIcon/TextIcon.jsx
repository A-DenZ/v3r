import {  } from 'react'
import './styles.scss'



const TextIcon = ({ text, type, icon}) => {

    
    return (
        <div className={`text-icon ${type === 'reverse' ? 'reverse' : ''}`}>      
            {type !== 'reverse' && icon("var(--black-60)")}
            <p>{text}</p>
            {type === 'reverse' && icon("var(--black-60)")}
        </div>
    )
}









export default TextIcon