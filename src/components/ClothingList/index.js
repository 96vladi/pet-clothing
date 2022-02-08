import React from 'react';
import { getClothingBySeason } from '../../selectors/getClothingsBySeason';
import { ClothingCard } from '../ClothingCard';

export const ClothingList = ({season}) => {

  const clothing = getClothingBySeason(season);

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {
        clothing.map(clothi => (
          <ClothingCard 
            key={clothi.id}
            { ...clothi }/>
        ))
      }
    </div>
  );
};
