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
      content: '',
    };
    this.data = props.data;
  }

  openModal = (arg: string) => {
    this.setState({ isModal: true, content: arg });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { isModal, content } = this.state;
    return isModal ? (
      <Modal handler={this.closeModal} content={content} />
    ) : (
      <ul className="card-list" role="card-list">
        {!this.data.length
          ? 'Sorry, There is nothing found'
          : this.data.map((card, i) => (
              <li key={i}>
                <Card key={i} data={card} handler={this.openModal} />
              </li>
            ))}
      </ul>
    );
  }
}

export default CardList;
