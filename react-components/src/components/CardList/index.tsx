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
      isModal: false,
      id: 0,
    };
    this.data = props.data;
  }

  openModal = (id: number) => {
    this.setState({ isModal: true, id });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { isModal, id } = this.state;
    return isModal ? (
      <Modal handler={this.closeModal} card={this.data[id]} />
    ) : (
      <ul className="card-list" role="card-list">
        {!this.data.length
          ? 'Sorry, There is nothing found'
          : this.data.map((card, i) => (
              <li key={i}>
                <Card key={i} id={i} data={card} handler={this.openModal} />
              </li>
            ))}
      </ul>
    );
  }
}

export default CardList;
