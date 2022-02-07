import { listClothing } from '../data/ListData';

export const getClothingById = ( id ) => {
  return listClothing.find( clothi => clothi.id === id);
};
