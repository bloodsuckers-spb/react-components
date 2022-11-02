import React, { useState, useEffect, useContext, FormEvent } from 'react';
import axios from 'axios';

import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';

import './index.css';

import AppContext from 'store/AppContex';

import { charactersLink } from '../../constants/API';

import { TCharacters } from './interfaces';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const storageData = localStorage.getItem('characters') || '';
  const [characters, setCharacters] = useState<TCharacters>(
    storageData ? JSON.parse(storageData) : []
  );
  const [isLoading, setLoadingState] = useState(false);
  const isResponseEmpty = !!localStorage.getItem('isFirstLoad');

  useEffect(() => {
    if (!characters.length && !isResponseEmpty) {
      getData();
      localStorage.setItem('isFirstLoad', `true`);
    }
  }, [isResponseEmpty, characters]);

  const getData = (value?: string) => {
    setLoadingState(true);
    const url = value ? `${charactersLink}?name=${value}` : charactersLink;
    axios
      .get(url)
      .then((response) => {
        const { results } = response.data;
        setCharacters(results);
        dispatch({ type: 'loading', payload: results });
        localStorage.setItem('characters', JSON.stringify(results));
      })
      .catch((error) => {
        console.warn(error);
        setCharacters([]);
        dispatch({ type: 'loading', payload: [] });
        localStorage.setItem('characters', '');
      })
      .finally(() => {
        setLoadingState(false);
        console.log(state);
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
      {isLoading ? <Spinner /> : <CardList data={characters} />}
    </main>
  );
};

export default Home;
