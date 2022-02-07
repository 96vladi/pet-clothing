import React from 'react';
import { getClothingBySeason } from '../../selectors/getClothingsBySeason';

export const ClothingList = ({season}) => {

  const clothing = getClothingBySeason(season);

  return (
    <ul>
      {
        clothing.map(clothi => (
          <li key={clothi.id}>
            {clothi.superhero}
          </li>
        ))
      }
    </ul>
  );
};
