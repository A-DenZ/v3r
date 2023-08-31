import logo from '../../../assets/images/logo.png'

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
                        <li><a href='c'>Tableau de bord</a></li>
                        <li><a href='c'>Réponses</a></li>
                        <li><a href='c'>Zone de partage</a></li>
                        <li><a href='c'>Formulaires</a></li>
                        <li><a href='c'>Analytique</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <p className='keywords'>LIENS RAPIDES</p>
                <ul>
                    <li>Voir les réponses</li>
                    <li>Créer un formulaire</li>
                    <li>Zone de partage</li>
                </ul>
            </div>

            <div className='logout'>
                <button>Se déconnecter</button>
            </div>

        </nav>
    )
}

export default SideBar
