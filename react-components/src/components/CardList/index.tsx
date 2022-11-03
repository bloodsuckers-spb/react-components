import React, { useState } from 'react';

import Card from 'components/Card';
import Modal from 'components/Modal';

import './index.css';

import { IProps, TCardId } from 'components/CardList/interfaces';

const CardList = ({ data, isLoaded }: IProps) => {
  const [isModalOpen, setModalState] = useState(false);
  const [cardId, setCardId] = useState<TCardId>(null);
  const message = isLoaded ? 'Sorry, There is nothing found' : '';

  const openModal = (cardId: number) => {
    setModalState(true);
    setCardId(cardId);
  };

  const closeModal = () => setModalState(false);

  return !isModalOpen || cardId === null ? (
    <ul className="card-list" role="card-list">
      {!data.length
        ? message
        : data.map((card, i) => (
            <li key={i}>
              <Card id={i} data={card} handler={openModal} />
            </li>
          ))}
    </ul>
  ) : (
    <Modal openModalHandler={closeModal} card={data[cardId]} />
  );
};

export default CardList;
