import React, { useState } from 'react';

import Card from 'components/Card';
import Modal from 'components/Modal';

import './index.css';

import { IProps, TCardId } from 'components/CardList/interfaces';

const CardList = ({ data }: IProps) => {
  const [isModalOpen, setModalState] = useState(false);
  const [cardId, setCardId] = useState<TCardId>(null);

  const openModal = (cardId: number) => {
    setModalState(false);
    setCardId(cardId);
  };

  const closeModal = () => setModalState(false);

  return !isModalOpen || cardId === null ? (
    <ul className="card-list" role="card-list">
      {!data.length
        ? 'Sorry, There is nothing found'
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
