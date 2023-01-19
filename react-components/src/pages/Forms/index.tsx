import React, { useContext } from 'react';

import FormCardList from 'components/FormCardList';
import Form from 'components/Form';

import './index.css';

import { addCards } from '../../store/actions';

import AppContext from 'store/AppContex';

import formData from '../../constants/formData';

import { IFormCards } from '../../types';

const Forms = () => {
  const {
    state: { customCards },
    dispatch,
  } = useContext(AppContext);

  const addCard = (card: IFormCards) => dispatch(addCards([...customCards, card]));

  return (
    <main className="main">
      <Form data={formData} addCard={addCard} />
      {!!customCards.length && <FormCardList data={customCards} />}
    </main>
  );
};

export default Forms;
