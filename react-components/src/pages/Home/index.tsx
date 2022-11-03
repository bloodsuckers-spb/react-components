import React, { useState, useEffect, useContext, FormEvent } from 'react';
import axios from 'axios';

import Spinner from '../../components/Spinner';
import CardsForm from '../../components/CardsForm';
import CardList from '../../components/CardList';

import './index.css';

import AppContext from 'store/AppContex';

import { charactersLink } from '../../constants/API';

const Home = () => {
  const {
    state: { cards, currentPage, pages, isLoaded },
    dispatch,
  } = useContext(AppContext);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    !isLoaded && getData();
  });

  const getData = (page = 1, value?: string) => {
    setLoadingState(true);
    const action = {
      type: 'loading',
      payload: {
        cards: [],
        currentPage: 0,
        pages: 0,
        isLoaded: true,
      },
    };
    // const url = value ? `${charactersLink}?name=${value}` : charactersLink;
    const url = `${charactersLink}/?page=${page}`;
    axios
      .get(url)
      .then((response) => {
        const { results, info } = response.data;
        action.payload = {
          ...action.payload,
          cards: results,
          currentPage: page,
          pages: info.pages,
        };
      })
      .catch((error) => console.warn(error))
      .finally(() => {
        dispatch(action);
        setLoadingState(false);
      });
  };

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const { target } = event;
    const { value } = target instanceof HTMLFormElement && target['search-bar'];
    getData(value);
  };

  const getPrevPage = () => getData(currentPage - 1);

  const getNextPage = () => getData(currentPage + 1);

  return (
    <main className="main" data-testid={'home'}>
      <CardsForm handleSearch={handleSearch} />
      <span className="pagination">
        {isLoaded && (
          <>
            <button aria-label="Previous" onClick={getPrevPage} disabled={currentPage - 1 === 0}>
              Prev
            </button>
            <p>
              {currentPage} / {pages}
            </p>
            <button aria-label="Next" onClick={getNextPage} disabled={currentPage + 1 > pages}>
              Next
            </button>
          </>
        )}
      </span>
      {isLoading ? <Spinner /> : <CardList data={cards} isLoaded={isLoaded} />}
    </main>
  );
};

export default Home;
