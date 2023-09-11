import React from 'react'
import './styles.scss'


const SearchInput = () => {
  return (
    <div id='search-input'>
        <div className="search-bar">
        <input className='input-search' placeholder='Appuyer sur CTRL + R pour rechercher' type="text" />
         <div className='search-button'>
            <p>Rechercher</p> </div>
      </div>
      
    </div>
  )
}

export default SearchInput
