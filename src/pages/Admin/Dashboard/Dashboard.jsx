import './styles.scss'
import Icon from '../../../components/tools/Icon/Icon'
import TextIcon from '../../../components/tools/TextIcon/TextIcon'
import { bell , responses , rightArrow } from '../../../lib/icons'
const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="card">
        <div className="first-group">
          <Icon icon={bell} size="120"/>
          <p className='main-title'>Vous avez x<br/> nouvelles notifications</p>
        </div>
        <TextIcon text="Ouvrir le panneau de notifications" icon={rightArrow}/>
      </div>
      <div className="card">
        <div className="first-group">
          <Icon icon={responses} size="120"/>
          <p className='main-title'>Vous avez x<br/> nouveaux formulaires</p>
        </div>
        <TextIcon text="Afficher la liste des formulaires" icon={rightArrow}/>
        
      </div>

      <div className="card" id='stats-card'>

      </div>

    </div>
  )
}

export default Dashboard
