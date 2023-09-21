import './styles.scss'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../../assets/images/logo.png'

/* homemade component */ 
import TextIcon from '../../tools/TextIcon/TextIcon'

/* import icon */
import { dashboard, responses, folder, check, analytic, rightArrow, logout } from '../../../lib/icons'




const SideBar = () => {
 
    const location = useLocation();

    return (
        <nav>
            <div className='block'>
                <div className="logo">
                <Link to='/admin'><img src={logo} alt="" /></Link> 
                </div>

                <div>
                    <p className='keywords'>MENU</p>
                    <ul>
                        <li className={location.pathname === '/admin' ? 'selected-page' : ''}> <Link to=''><TextIcon text={'Tableau de bord'} icon={dashboard} color={location.pathname === '/admin' ? 'var(--green)' : 'var(--black-60)'}/></Link> </li>
                        <li className={location.pathname === '/admin/reponses' ? 'selected-page' : ''}><Link to='reponses'><TextIcon text={'Réponses'} icon={responses} color={location.pathname === '/admin/reponses' ? 'var(--green)' : 'var(--black-60)'}/></Link></li>
                        <li className={location.pathname === '/admin/partage' ? 'selected-page' : ''}><Link to='partage'><TextIcon text={'Zone de partage'} icon={folder} color={location.pathname === '/admin/partage' ? 'var(--green)' : 'var(--black-60)'}/></Link></li>
                        <li><TextIcon text={'Modèles'} icon={check}/></li>
                        <li><TextIcon text={'Analytique'} icon={analytic}/></li>
                    </ul>
                    
                </div>
            </div>

            <div  className='block'>
                <p className='keywords'>LIENS RAPIDES</p>
                <ul>
                    <li><TextIcon text={'Espace employé'} icon={rightArrow}/></li>
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
