import React, { Component } from 'react';
import './index.css';
import { IProps, IState } from './interfaces';
import IFormCards from '../../types/IFormCards';
import Form from 'components/Form';
import FormCard from 'components/FormCard';
import formData from '../../constants/formData';

export default class Forms extends Component<IProps, IState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (data: IFormCards) => {
    const { cards } = this.state;
    cards.push(data);
    this.setState({ cards: cards });
  };

  render() {
    const { cards } = this.state;
    return (
      <main className="main">
        <Form data={formData} fn={this.addCard} />
        <ul className="cards">
          {cards.map((card, i) => (
            <li key={i}>
              <FormCard data={card} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
