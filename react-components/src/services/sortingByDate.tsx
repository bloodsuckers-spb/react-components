import { ICaracter } from 'pages/Home/interfaces';

const sortingByDate = (a: ICaracter, b: ICaracter) => {
  const nameA = a.created.toLowerCase(),
    nameB = b.created.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

export default sortingByDate;
