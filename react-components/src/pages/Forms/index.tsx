import React, { useState } from 'react';

import FormCardList from 'components/FormCardList';
import Form from 'components/Form';

import './index.css';

import formData from '../../constants/formData';

import { ICards } from './interfaces';
import { IFormCards } from '../../types';

const Forms = () => {
  const [cards, setCards] = useState<ICards>([]);

  const addCard = (data: IFormCards) => setCards((cards) => [...cards, data]);

  return (
    <main className="main">
      <Form data={formData} addCard={addCard} />
      {!!cards.length && <FormCardList data={cards} />}
    </main>
  );
};

export default Forms;
