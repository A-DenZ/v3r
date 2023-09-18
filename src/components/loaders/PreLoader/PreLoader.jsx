import { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import './styles.scss'


const PreLoader = ({ hide }) => {
    useEffect(() => {
        setTimeout(() => hide(), 1650)
    }, [])
    
    return (
        <div id='preloader'>
            <div className="inner">
                <div className="overlay dark-green"></div>
                <div className="overlay green"></div>           
            </div>
        </div>
    )
}


PreLoader.propTypes = {
    hide: PropTypes.function
}

export default PreLoader