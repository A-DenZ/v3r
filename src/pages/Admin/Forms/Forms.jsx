import React from 'react'
import './styles.scss'

/* import homemade component */
import SearchInput from '../../../components/inputs/SearchInput/SearchInput'
import Button from '../../../components/tools/Button/Button'


let forms = [1,1,1,1,1,1,1,1,1,1,1,1,1]
let box = true;

const Forms = () => {
    return ( 
    <div id='forms'>
     
     <div className='form-search-bar'>
     <SearchInput/>
     <Button text={'Trier'} />
     <Button text={'Filtrer'} />
    </div>

      <div className={`container ${box ? "grid" : "list"}`}>
      {forms.map((form, index) => (
        <div className="card" key={index}>
          <h2>#7281-0394-3394</h2>
          <div className='text-container-cards'>
            <p>Nom du demandant</p>
            <p>Jay Carle Brodeur</p>
          </div>
          <div className='text-container-cards'>
            <p>Formulaire</p>
            <p>AUDI SST</p>
          </div>
          <div className='text-container-cards'>
            <p>Date de la demande</p>
            <p>5 mai 2023</p>
          </div>
          <div className='text-container-cards'>
            <p>Statut de la demande</p>
            <p>Approuvée</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    );
}
export default Forms
