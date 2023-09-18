import './styles.scss'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo.png'

/* homemade component */ 
import TextIcon from '../../tools/TextIcon/TextIcon'
import Button from '../../tools/Button/Button'

/* import icon */
import { dashboard, responses, folder, check, analytic, rightArrow, logout } from '../../../lib/icons'


const SideBar = () => {

    
    return (
        <nav>
            <div className='block'>
                <div className="logo">
                <Link to='/admin'><img src={logo} alt="" /></Link> 
                </div>

                <div>
                    <p className='keywords'>MENU</p>
                    <ul>
                        <li><Link to=''><TextIcon text={'Tableau de bord'} icon={dashboard}/></Link></li>
                        <li><Link to='formulaires'><TextIcon text={'Réponses'} icon={responses}/></Link></li>
                        <li><Link to='partage'><TextIcon text={'Zone de partage'} icon={folder}/></Link></li>
                        <li><TextIcon text={'Modèles'} icon={check}/></li>
                        <li><TextIcon text={'Analytique'} icon={analytic}/></li>
                    </ul>
                    
                </div>
            </div>

            <div  className='block'>
                <p className='keywords'>LIENS RAPIDES</p>
                <ul>
                    <li><TextIcon text={'Espace employé'} icon={rightArrow}/></li>
                    <li><TextIcon text={'Créer un modèle'} icon={rightArrow}/></li>
                    <li><TextIcon text={'Autre lien utile'} icon={rightArrow}/></li>
                </ul>
            </div>

            <div className='logout block'>
                <button><TextIcon text={'Se déconnecter'} icon={logout}/></button>
            </div>

        </nav>
    )
}

export default SideBar
