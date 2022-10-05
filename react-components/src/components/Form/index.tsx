import React, { Component, FormEvent } from 'react';
import './index.css';

type refInput = React.RefObject<HTMLInputElement>;
type refSelect = React.RefObject<HTMLSelectElement>;

type FormProps = Record<string, never>;

interface FormState {
  isDisabled: boolean;
}

export default class Form extends Component<FormProps, FormState> {
  private firstName: refInput = React.createRef();
  private lastName: refInput = React.createRef();
  private birthday: refInput = React.createRef();
  private country: refSelect = React.createRef();
  private fileUpload: refInput = React.createRef();
  constructor(props = {}) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  changeDisabledStatus = () => {
    const { isDisabled } = this.state;
    this.setState({ isDisabled: !isDisabled });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value.length > 2) {
      this.changeDisabledStatus();
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" ref={this.firstName} onChange={this.handleChange} />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          autoComplete="off"
          ref={this.lastName}
          onChange={this.handleChange}
        />
        <label htmlFor="date-picker">Your Birthday:</label>
        <input type="date" id="date-picker" ref={this.birthday} />
        <label htmlFor="select">Country:</label>
        <select id="select" ref={this.country}>
          <option value="grapefruit">USA</option>
          <option value="lime">Germany</option>
          <option defaultValue="coconut">England</option>
          <option value="mango">Sweden</option>
        </select>
        <label htmlFor="file-input">Upload file:</label>
        <input id="file-input" type="file" ref={this.fileUpload} />
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      </form>
    );
  }
}
