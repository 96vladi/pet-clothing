import { listClothing } from '../data/ListData';

export const getClothingBySeason = ( season ) => {
  const validSeason = ['Summer', 'Winter'];
  if(!validSeason.includes(season)){
    throw new Error(`Season "${season}" is wrong` )
  }

  return listClothing.filter( clothi => clothi.season === season);
};
