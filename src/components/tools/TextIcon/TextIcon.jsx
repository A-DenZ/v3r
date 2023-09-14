import './styles.scss'

const TextIcon = ({ text, type, icon, color = 'var(--black-60)'}) => {

    
    return (
        <div className={`text-icon ${type === 'reverse' ? 'reverse' : ''}`}>      
            {type !== 'reverse' && icon(color)}
            <p>{text}</p>
            {type === 'reverse' && icon(color)}
        </div>
    )
}









export default TextIcon