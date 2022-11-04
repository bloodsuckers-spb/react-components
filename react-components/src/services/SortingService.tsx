import { ICaracter } from 'types';

class SortingService {
  static sortingByName = (a: ICaracter, b: ICaracter) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  };

  static sortingByDate = (a: ICaracter, b: ICaracter) => {
    const nameA = a.created.toLowerCase();
    const nameB = b.created.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  };

  static sortingByNameReverse = (a: ICaracter, b: ICaracter) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  };
}

export default SortingService;
