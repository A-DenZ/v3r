import React from 'react'
import './styles.scss'

/* import homemade component */
import Button from '../../../components/tools/Button/Button'
import TextIcon from '../../../components/tools/TextIcon/TextIcon'
import SearchInput from '../../../components/inputs/SearchInput/SearchInput'

/* import icons*/
import { filter, plus, rightArrow } from '../../../lib/icons'


const SharingZone = () => {
return (
    <div className="sharing-zone">  
        <div className='nav-search'>
           <SearchInput/>
           <Button text={<TextIcon text={'Filtres'} icon={filter}/>} bgColor={'var(--green-white)'} />
           <Button text={<TextIcon text={'Nouveau'} icon={plus}/>} bgColor={'var(--green-white)'} />
        </div>

        <div className='card'>
         <h2>Procédure de saisie du formulaire de déclaration d’accidents</h2>
         <p>Ceci est un exemple d’une description qui expliquerais ce que l’utilisateur peut s’attendre à trouver en suivant le lien qui se trouve au bas de la carte. À partir du mot “À”, qu’on retrouve au début même de cette phrase, tout ce que vous lisez est du gros n’importe quoi. En effet, ce texte ne sert que de guide visuel...</p>
         <TextIcon text={'Lien vers la procédure'} icon={rightArrow}/>
        </div>
        
    </div>
)

}

export default SharingZone