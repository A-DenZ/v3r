import './styles.scss'

/* import homemade component */
import TextIcon from '../../../components/tools/TextIcon/TextIcon'
import SearchInput from '../../../components/inputs/SearchInput/SearchInput'
import Button from '../../../components/tools/Button/Button'


/* import icons*/
import { rightArrow, filter, plus } from '../../../lib/icons'


const titres = [
    "Procédure de saisie du formulaire de déclaration d’accidents",
    "Procédure de saisie des Audits SST",
    "Informations sur les changements SST",
  ];

  const descriptions = [
    "Ceci est un exemple d’une description qui expliquerais ce que l’utilisateur peut s’attendre à trouver en suivant le lien qui se trouve au bas de la carte. À partir du mot “À”, qu’on retrouve au début même de cette phrase, tout ce que vous lisez est du gros n’importe quoi. En effet, ce texte ne sert que de guide visuel...",
    "Ceci est un exemple d’une description qui expliquerais ce que l’utilisateur peut s’attendre à trouver en suivant le lien qui se trouve au bas de la carte. À partir du mot “À”, qu’on retrouve au début même de cette phrase, tout ce que vous lisez est du gros n’importe quoi. En effet, ce texte ne sert que de guide visuel...",
    "Ceci est un exemple d’une description qui expliquerais ce que l’utilisateur peut s’attendre à trouver en suivant le lien qui se trouve au bas de la carte. À partir du mot “À”, qu’on retrouve au début même de cette phrase, tout ce que vous lisez est du gros n’importe quoi. En effet, ce texte ne sert que de guide visuel...",
  ];

  const liens = [
    'Nom donnée au lien',
    'Lien vers la procédure',
    'Consulter la procédure'
  ];


const SharingZone = () => {
return (
    <div className="sharing-zone">  
    
    <div className='sharing-search-bar'>
     <SearchInput/>
     <Button text={<TextIcon text={'Filtres'} icon={filter}/>} bgColor={'var(--light-green)'} />
     <Button text={<TextIcon text={'Nouveau'} icon={plus}/>} bgColor={'var(--light-green)'} />
    </div>

        <div className='card-zone'>

        {titres.map((titre, i) => (
        <div className='card'>
         <h2>{titre}</h2>
         <p>{descriptions[i]}</p>
         <TextIcon className="text-icon" text={liens[i]} icon={rightArrow} color={'var(--green)'}/>
        </div>

))}

        

        </div>
        
    </div>
)

}

export default SharingZone