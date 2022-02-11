import React, { useMemo } from 'react'
import queryString from 'query-string';

import { ClothingCard } from '../ClothingCard';
import { useForm } from '../../Hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getClothingByName } from '../../selectors/getClothingByName';

export const Search = () => {

  const history = useNavigate();
  const location = useLocation();
  const { q='' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });
  const { searchText } = formValues;

  const clothingFiltered = useMemo(() => getClothingByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    history(`?q=${searchText}`);
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
            (q === '')
              &&
              <div className='alert alert-info'>
                Search a clothing
              </div>
          }
          {
            (q !== '' && clothingFiltered.length === 0)
            &&
            <div className='alert alert-danger'>
              there is no a clothing with { q }
            </div>
          }
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
