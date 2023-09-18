import './styles.scss'
import TextIcon from '../../tools/TextIcon/TextIcon'
import Icon from '../../../components/tools/Icon/Icon'

import { user , bell} from '../../../lib/icons'

const SecondaryBar = () => {
  return (
    <div id="secondary-bar">
        <div className='left'>
            <h1>Tableau de bord</h1>
        </div>
        <div className="right">
            <TextIcon icon={user} text='Étienne Courchesne' type="reverse" />
            <Icon icon={bell} size={20} color={'var(--green)'}/>
        </div>
    </div>
  )
}

export default SecondaryBar
