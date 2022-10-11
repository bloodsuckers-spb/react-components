import React, { Component } from 'react';
import './index.css';
import { FormProps, FormState, ICards } from './interfaces';
import Form from 'components/Form';
import FormCard from 'components/FormCard';
import formData from '../../constants/formData';

export default class Forms extends Component<FormProps, FormState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (data: ICards) => {
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
