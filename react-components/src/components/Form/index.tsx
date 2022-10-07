import React, { Component, FormEvent } from 'react';
import './index.css';
import { countries, FormProps, FormState, ErrorsKey, IErrors } from './interfaces';
import { refInput, refSelect } from './interfaces';
import TextInput from '../TextInput';
import SelectOptions from '../SelectOption';
import { textInputProps } from '../../constants/textInputProps';

export default class Form extends Component<FormProps, FormState> {
  private readonly firstName: refInput = React.createRef();
  private readonly lastName: refInput = React.createRef();
  private readonly birthday: refInput = React.createRef();
  private readonly country: refSelect = React.createRef();
  // private fileUpload: refInput = React.createRef();
  private selectOptions: Readonly<string[]> = Object.values(countries);
  private addCard;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      isDisabled: true,
      errors: {
        firstName: '',
        lastName: '',
        country: '',
        birthday: '',
      },
    };
    this.addCard = props.fn;
  }

  get hasErrors() {
    return !!Object.values(this.state.errors).join('').length;
  }

  createCard = () => {
    const formData = {
      firstName: this.firstName.current?.value || '',
      lastName: this.lastName.current?.value || '',
      country: this.country.current?.value || '',
    };
    this.addCard(formData);
  };

  changeErrorMsg = (key: ErrorsKey, errMsg: string) => {
    const { errors } = this.state;
    errors[key] = errMsg;
    this.setState({ errors: errors });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { isDisabled } = this.state;
    console.log(event.currentTarget.value);
    if (!this.hasErrors && isDisabled) {
      this.setState({ isDisabled: false });
    }

    if (this.hasErrors) {
      const { currentTarget } = event;
      const id = currentTarget.id.trim() as keyof IErrors;
      this.changeErrorMsg(id, '');
      currentTarget.style.border = '1px solid transparent';
    }

    if (!this.hasErrors && isDisabled) {
      this.setState({ isDisabled: false });
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.validate();
  };

  validate = () => {
    const { validateTextInput } = this;
    validateTextInput('firstName').validateTextInput('lastName').validateSelect().validateDate();
    const isErrors = this.hasErrors;
    if (!isErrors) {
      this.createCard();
    } else {
      this.setState({ isDisabled: true });
    }
  };

  validateTextInput = (key: 'firstName' | 'lastName') => {
    const node = this[key].current;
    if (node) {
      const { value } = node;
      if (value.length < 3 || !/^[A-Z][a-z]+|[А-Я][а-я]+$/.test(value)) {
        this.changeErrorMsg(key, `${key} is incorrect`);
        node.style.border = '1px solid red';
      } else {
        this.changeErrorMsg(key, ``);
      }
    }
    return this;
  };

  validateSelect = () => {
    if (this.country.current) {
      const node = this.country.current;
      if (!node?.value) {
        this.changeErrorMsg('country', `Please choose country`);
        node.style.border = '1px solid red';
      } else {
        this.changeErrorMsg('country', ``);
      }
    }
    return this;
  };

  validateDate = () => {
    console.log(this.birthday.current);
    if (this.birthday.current) {
      const { value } = this.birthday.current;
      if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value)) {
        this.changeErrorMsg('birthday', `incorrect date`);
        this.birthday.current.style.border = '1px solid red';
      } else {
        this.changeErrorMsg('birthday', ``);
      }
    }
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {textInputProps.map((item, i) => {
          const ref = !i ? this.firstName : this.lastName;
          const { firstName, lastName } = this.state.errors;
          const error = !i ? firstName : lastName;
          return <TextInput key={i} data={item} refer={ref} error={error} fn={this.handleChange} />;
        })}
        <label htmlFor="birthday">Your birthday:</label>
        <input id="birthday" type="date" onChange={this.handleChange} ref={this.birthday} />
        <p className="error">{this.state.errors.birthday}</p>
        <label htmlFor="country">Your country:</label>
        <select id="country" ref={this.country} onChange={this.handleChange}>
          <option value="">-- Choose city --</option>
          {this.selectOptions.map((country, i) => (
            <SelectOptions key={i} country={country} />
          ))}
        </select>
        <p className="error">{this.state.errors.country}</p>
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      </form>
    );
  }
}
