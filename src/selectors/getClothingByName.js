import { listClothing } from "../data/ListData";

export const getClothingByName = (name='') => {

  if(name ===''){
    return [];
  }

  name = name.toLocaleLowerCase();
  return listClothing.filter( clothi => clothi.superhero.toLocaleLowerCase().includes(name));
};
