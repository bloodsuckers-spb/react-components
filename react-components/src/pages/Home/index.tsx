import React, { useState, useEffect, useContext, FormEvent } from 'react';
import axios from 'axios';

import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';

import './index.css';

import AppContext from 'store/AppContex';

import { charactersLink } from '../../constants/API';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    !state.cards.length && getData();
  }, []);

  const getData = (value?: string) => {
    setLoadingState(true);
    const url = value ? `${charactersLink}?name=${value}` : charactersLink;
    axios
      .get(url)
      .then((response) => {
        const { results } = response.data;
        dispatch({ type: 'loading', payload: results });
      })
      .catch((error) => {
        console.warn(error);
        dispatch({ type: 'loading', payload: [] });
      })
      .finally(() => {
        setLoadingState(false);
      });
  };

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const { target } = event;
    const { value } = target instanceof HTMLFormElement && target['search-bar'];
    getData(value);
  };

  return (
    <main className="main" data-testid={'home'}>
      <SearchBar handleSearch={handleSearch} />
      {isLoading ? <Spinner /> : <CardList data={state.cards} />}
    </main>
  );
};

export default Home;
