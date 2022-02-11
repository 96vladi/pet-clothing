import React from 'react'
import { listClothing } from '../../data/ListData'
import { ClothingCard } from '../ClothingCard';
import { useForm } from '../../Hooks/useForm';

export const Search = () => {

  const clothingFiltered = listClothing;
  
  const [ formValues, handleInputChange ] = useForm({
    searchText: ''
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText)
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input 
              type="texr"
              placeholder='Find your clothing'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}/>
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
            ))
          }
        </div>
      </div>
    </div>
  )
}
