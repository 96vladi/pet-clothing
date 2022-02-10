import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getClothingById } from '../../selectors/getClothingById';

export const Clothing = () => {
  const {Id} = useParams();
  // const clothi = getClothingById(Id);
  const clothi = useMemo(() => getClothingById(Id), [Id])

  const history = useNavigate();
  
  if(!clothi){
    return <Navigate to="/"/>
  }

  const handleReturn = () => {
    if(history.length < 2){
      history("/");
    }else {
      history(-1);    
    }
  };

  const {
    superHero,
    season,
    alter_ego,
    first_appearance,
    characters
  } = clothi;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src='../assets/perro.jpg'
          alt={ superHero }
          className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{ superHero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b> {alter_ego}</li>
          <li className='list-group-item'><b>season: </b> {season}</li>
          <li className='list-group-item'><b>First Appearance: </b> {first_appearance}</li>
        </ul>
        <h5>Characters</h5>
        <p>{ characters }</p>
        <button 
          className='btn btn-info'
          onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
