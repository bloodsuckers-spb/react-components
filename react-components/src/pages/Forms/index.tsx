import React, { Component } from 'react';
import './index.css';
import { IProps, IState } from './interfaces';
import { IFormCards } from '../../types/index';
import FormCardList from 'components/FormCardList';
import Form from 'components/Form';
import formData from '../../constants/formData';

export default class Forms extends Component<IProps, IState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (data: IFormCards) => {
    this.setState((state) => ({ cards: [...state.cards, data] }));
  };

  render() {
    const { cards } = this.state;
    return (
      <main className="main">
        <Form data={formData} addCard={this.addCard} />
        {!!cards.length && <FormCardList data={cards} />}
      </main>
    );
  }
}
