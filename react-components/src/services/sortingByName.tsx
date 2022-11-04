import { ICaracter } from 'pages/Home/interfaces';

const sortingByName = (a: ICaracter, b: ICaracter) => {
  const nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

export default sortingByName;
