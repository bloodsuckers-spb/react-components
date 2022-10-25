import React, { Component } from 'react';
import './index.css';
import { IProps, IState } from 'components/CardList/interfaces';
import Card from 'components/Card';
import Modal from 'components/Modal';

class CardList extends Component<IProps, IState> {
  data;
  constructor(props: IProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      cardId: null,
    };
    this.data = props.data;
  }

  openModal = (cardId: number) => {
    this.setState({ isModalOpen: true, cardId });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen, cardId } = this.state;
    return !isModalOpen || cardId === null ? (
      <ul className="card-list" role="card-list">
        {!this.data.length
          ? 'Sorry, There is nothing found'
          : this.data.map((card, i) => (
              <li key={i}>
                <Card id={i} data={card} handler={this.openModal} />
              </li>
            ))}
      </ul>
    ) : (
      <Modal openModalHandler={this.closeModal} card={this.data[cardId]} />
    );
  }
}

export default CardList;

// <Modal handler={this.closeModal} card={this.data[cardId]} />
//  && cardId ?
