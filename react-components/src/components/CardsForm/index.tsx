import React, { useState, useEffect, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';

import './index.css';

import { IProps, TSearchBarChange } from './interfaces';

// import { charactersLink } from '../../constants/API';

interface FormItems {
  [key: string]: string;
}

const CardsForm = ({ handleSearch }: IProps) => {
  // const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  const { register, handleSubmit } = useForm<FormItems>();

  // const handleChange = ({ target }: TSearchBarChange) => setSearchValue(target.value);

  const onSubmit = (data: FormItems) => console.log(data);

  return (
    <form className="cards-form" action="/" method="get" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="search-bar">
        <input
          type="text"
          id="search-bar"
          placeholder="Search"
          autoComplete="off"
          autoFocus={true}
          {...register('name')}
        />
      </label>
      <select>
        <option>10</option>
        <option>20</option>
      </select>
      <select>
        <option>по дате добавления</option>
        <option>по убыванию</option>
        <option>по возрастанию</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default CardsForm;
