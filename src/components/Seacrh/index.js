import React from 'react'
import { listClothing } from '../../data/ListData'
import { ClothingCard } from '../ClothingCard';

export const Search = () => {

  const clothingFiltered = listClothing;

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />
          <form>
            <input 
            type="texr"
            placeholder='Find your clothing'
            className='form-control'/>
            <button
            type='submit'
            className='btn m-1 btn-block btn-outline-primary'>
              Search
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Result</h4>
          <hr />
          {
            clothingFiltered.map(clothi => (
              <ClothingCard 
                key={clothi.id}
                {...clothi}
              />
            ));
          }
        </div>
      </div>
    </div>
  )
}
