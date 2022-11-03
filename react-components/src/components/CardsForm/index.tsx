import React, { useContext, ChangeEvent, FormEvent } from 'react';

import './index.css';

import AppContext from 'store/AppContex';

import { IProps } from './interfaces';

const CardsForm = ({ getData }: IProps) => {
  const { state, dispatch } = useContext(AppContext);

  const onChange = ({ currentTarget }: ChangeEvent) => {
    if (currentTarget instanceof HTMLInputElement) {
      const { value } = currentTarget;
      dispatch({ type: 'changeOptions', payload: { ...state, name: value } });
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
          defaultValue={state.name}
          onChange={onChange}
        />
      </label>
      <button type="submit">Search</button>
      <select>
        <option>alive</option>
        <option>dead</option>
        <option>unknown</option>
      </select>
    </form>
  );
};

export default CardsForm;
