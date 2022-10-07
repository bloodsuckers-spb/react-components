import React, { Component, FormEvent } from 'react';
import './index.css';
import { countries, FormProps, FormState, ErrorsKey } from './interfaces';
import { refInput, refSelect } from './interfaces';
import TextInput from '../TextInput';
import SelectOptions from '../SelectOption';
import { textInputProps } from '../../constants/textInputProps';

export default class Form extends Component<FormProps, FormState> {
  private readonly firstName: refInput = React.createRef();
  private readonly lastName: refInput = React.createRef();
  // private birthday: refInput = React.createRef();
  private country: refSelect = React.createRef();
  // private fileUpload: refInput = React.createRef();
  private selectOptions: Readonly<string[]> = Object.values(countries);
  private isErrors = false;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      isDisabled: true,
      errors: {
        firstName: '',
        lastName: '',
      },
    };
  }

  changeErrorMsg = (key: ErrorsKey, errMsg: string) => {
    const { errors } = this.state;
    errors[key] = errMsg;
    this.setState({ errors: errors });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { isErrors } = this;
    const { isDisabled } = this.state;
    if (!isErrors && isDisabled) {
      this.setState({ isDisabled: false });
    } else {
      const { currentTarget } = event;
      this.changeErrorMsg('firstName', '');
      currentTarget.style.border = '1px solid transparent';
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.isErrors = false;
    const { validateTextInput } = this;
    validateTextInput('firstName').validateTextInput('lastName');
    if (!this.isErrors) {
      this.addCard();
    } else {
      this.setState({ isDisabled: true });
    }
  };

  validateTextInput = (key: 'firstName' | 'lastName') => {
    const node = this[key].current;
    if (node) {
      const { value } = node;
      if (value.length < 3 || !/^[A-Z][a-z]+|[А-Я][а-я]+$/.test(value)) {
        this.isErrors = true;
        this.changeErrorMsg(key, `${key} is incorrect`);
        node.style.border = '1px solid red';
      } else {
        this.changeErrorMsg(key, ``);
      }
    }
    return this;
  };

  addCard = () => {
    console.log('addCard');
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
        <select>
          {this.selectOptions.map((country, i) => (
            <SelectOptions key={i} country={country} />
          ))}
        </select>
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      </form>
    );
  }
}
