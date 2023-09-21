/* import homemade component */
import TextIcon from '../../../components/tools/TextIcon/TextIcon'

/* import icons*/
import { rightArrow } from '../../../lib/icons'

const SharingCard = ( title, description, linkText  ) => {
    return (
        <div className='sharing-card'>
        <h2>{title}</h2>
        <p>{description}</p>
        <TextIcon className="text-icon" text={linkText} icon={rightArrow} color={'var(--green)'}/>
       </div>
        )
    }

export default SharingCard
