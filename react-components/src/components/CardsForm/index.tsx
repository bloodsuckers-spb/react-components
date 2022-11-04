import React, { useContext, ChangeEvent, FormEvent } from 'react';

import { selectSorting, changeOptions } from 'store/actions';

import './index.css';

import AppContext from 'store/AppContex';

import { Props } from './interfaces';

const CardsForm = ({ getData }: Props) => {
  const {
    state: { name, sortingBy },
    dispatch,
  } = useContext(AppContext);

  const onChange = ({ currentTarget }: ChangeEvent) => {
    if (currentTarget instanceof HTMLInputElement) {
      dispatch(changeOptions(currentTarget.value));
    }
  };

  const onSelect = ({ currentTarget }: ChangeEvent) => {
    if (currentTarget instanceof HTMLSelectElement) {
      dispatch(selectSorting(currentTarget.value));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    getData();
  };

  return (
    <form className="cards-form" action="/" method="get" onSubmit={handleSubmit}>
      <label htmlFor="search-bar">
        <input
          type="text"
          id="search-bar"
          placeholder="Search"
          autoComplete="off"
          autoFocus={true}
          defaultValue={name}
          onChange={onChange}
        />
      </label>
      <button type="submit">Search</button>
      <select defaultValue={sortingBy} onChange={onSelect}>
        <option>By name</option>
        <option>By date</option>
      </select>
    </form>
  );
};

export default CardsForm;
