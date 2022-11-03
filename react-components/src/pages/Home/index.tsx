import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import Spinner from '../../components/Spinner';
import CardsForm from '../../components/CardsForm';
import CardList from '../../components/CardList';

import './index.css';

import AppContext from 'store/AppContex';

import { charactersLink } from '../../constants/API';

const Home = () => {
  const {
    state: { cards, currentPage, pages, isLoaded, name },
    dispatch,
  } = useContext(AppContext);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    !isLoaded && getData();
  });

  const getData = (page = 1) => {
    const url = `${charactersLink}/?page=${page}&name=${name}`;
    const payload = {
      cards: [],
      currentPage: page,
      pages: 0,
      name: name,
      isLoaded: true,
    };
    setLoadingState(true);
    axios
      .get(url)
      .then((response) => {
        const { results, info } = response.data;
        payload.cards = results;
        payload.pages = info.pages;
      })
      .catch((error) => {
        console.warn(error);
        payload.currentPage = 0;
      })
      .finally(() => {
        dispatch({ type: 'loading', payload });
        setLoadingState(false);
      });
  };

  const getPrevPage = () => getData(currentPage - 1);

  const getNextPage = () => getData(currentPage + 1);

  return (
    <main className="main" data-testid={'home'}>
      <CardsForm getData={getData} />
      <span className="pagination">
        {isLoaded && (
          <>
            <button aria-label="Previous" onClick={getPrevPage} disabled={currentPage - 1 <= 0}>
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
