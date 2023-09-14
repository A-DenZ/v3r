/* import homemade component */
import Button from '../../../components/tools/Button/Button'
import TextIcon from '../../../components/tools/TextIcon/TextIcon'
import SearchInput from '../../../components/inputs/SearchInput/SearchInput'


/* import icons*/
import { filter, plus } from '../../../lib/icons'


import './styles.scss'

const SearchBar = () => {
    return (
            <div className='nav-search'>
               <SearchInput/>
               <Button text={<TextIcon text={'Filtres'} icon={filter}/>} bgColor={'var(--green-white)'} />
               <Button text={<TextIcon text={'Nouveau'} icon={plus}/>} bgColor={'var(--green-white)'} />
            </div>
    )
}

export default SearchBar