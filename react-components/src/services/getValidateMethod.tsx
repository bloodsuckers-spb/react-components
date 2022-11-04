import { TimeStamp } from '../types';

const getValidateMethod = (id: string, type?: string) => {
  const isTextInputValid = (value: string) => /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);

  const yearsOf = (date: TimeStamp) => new Date().getFullYear() - new Date(date).getFullYear();

  const inRange = (age: number, min = 5, max = 100) => age >= min && age <= max;

  const isDateValid = (value: string) => inRange(yearsOf(value));

  const isConfirm = (value: string) => !!value;

  const isSelectValid = (value: string) =>
    value !== '-- Choose country --' && !!value.trim().length;

  const isFileValid = (value: string) => !!value.length;

  switch (type) {
    case 'text':
      return isTextInputValid;
    case 'date':
      return isDateValid;
    case 'file':
      return isFileValid;
    case 'checkbox':
      return id !== 'switcher' ? isConfirm : () => true;
    default:
      return isSelectValid;
  }
};

export default getValidateMethod;
