import React, { Component } from 'react';
import './index.css';
import Form from 'components/Form';

export default class Forms extends Component {
  constructor(props = {}) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <Form />
      </main>
    );
  }
}
