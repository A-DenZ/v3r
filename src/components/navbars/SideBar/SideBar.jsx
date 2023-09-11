import logo from '../../../assets/images/logo.png'

/* homemade component */ 
import TextIcon from '../../tools/TextIcon/TextIcon'
import Button from '../../tools/Button/Button'

/* import icon */
import { dashboard, responses, folder, check, analytic, rightArrow, logout } from '../../../lib/icons'


const SideBar = () => {

    
    return (
        <nav>
            <div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div>
                    <p className='keywords'>MENU</p>
                    <ul>
                        <li><TextIcon text={'Tableau de bord'} icon={dashboard}/></li>
                        <li><TextIcon text={'Réponses'} icon={responses}/></li>
                        <li><TextIcon text={'Zone de partage'} icon={folder}/></li>
                        <li><TextIcon text={'Modèles'} icon={check}/></li>
                        <li><TextIcon text={'Analytique'} icon={analytic}/></li>
                    </ul>
                    
                </div>
            </div>

            <div>
                <p className='keywords'>LIENS RAPIDES</p>
                <ul>
                    <li><TextIcon text={'Espace employé'} icon={rightArrow}/></li>
                    <li><TextIcon text={'Créer un modèle'} icon={rightArrow}/></li>
                    <li><TextIcon text={'Autre lien utile'} icon={rightArrow}/></li>
                </ul>
            </div>

            <div className='logout'>
                <button><TextIcon text={'Se déconnecter'} icon={logout}/></button>
            </div>

        </nav>
    )
}

export default SideBar
