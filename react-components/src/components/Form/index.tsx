import React, { Component, FormEvent } from 'react';
import './index.css';
import { countries, FormProps, FormState, ErrorsKey, IErrors } from './interfaces';
import { refInput, refSelect } from './interfaces';
import SelectOptions from '../SelectOption';
import FormInput from '../FormInput';

export default class Form extends Component<FormProps, FormState> {
  private readonly firstName: refInput = React.createRef();
  private readonly lastName: refInput = React.createRef();
  private readonly birthday: refInput = React.createRef();
  private readonly country: refSelect = React.createRef();
  private readonly profilePic: refInput = React.createRef();
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
        profilePic: '',
      },
    };
    this.addCard = props.fn;
  }

  get hasErrors() {
    return !!Object.values(this.state.errors).join('').length;
  }

  createCard = () => {
    const { firstName, lastName, country, birthday, profilePic } = this;
    const profileImg = profilePic.current?.files || '';
    const formData = {
      firstName: firstName.current?.value || '',
      lastName: lastName.current?.value || '',
      country: country.current?.value || '',
      birthday: birthday.current?.value || '',
      profilePic: profileImg instanceof FileList ? URL.createObjectURL(profileImg[0]) : '',
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
    validateTextInput('firstName')
      .validateTextInput('lastName')
      .validateSelect()
      .validateDate()
      .validateFile();
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
    if (this.birthday.current) {
      const { value } = this.birthday.current;
      if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) || Date.now() - Date.parse(value) < 0) {
        this.changeErrorMsg('birthday', `incorrect date`);
        this.birthday.current.style.border = '1px solid red';
      } else {
        this.changeErrorMsg('birthday', ``);
      }
    }
    return this;
  };

  validateFile = () => {
    console.log('validateFile');
  };

  render() {
    const { isDisabled } = this.state;
    const formItems = [
      {
        title: 'First Name:',
        id: 'firstName',
        type: 'text',
        errorMsg: this.state.errors.firstName,
        ref: this.firstName,
      },
      {
        title: 'Last Name:',
        id: 'lastName',
        type: 'text',
        errorMsg: this.state.errors.lastName,
        ref: this.lastName,
      },

      {
        title: 'Your birthday:',
        id: 'birthday',
        type: 'date',
        errorMsg: this.state.errors.birthday,
        ref: this.birthday,
      },
      {
        title: 'Add picture:',
        id: 'profilePic',
        type: 'file',
        errorMsg: this.state.errors.birthday,
        ref: this.profilePic,
      },
    ];
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {formItems.map((data, i) => (
          <FormInput key={i} data={data} handler={this.handleChange} />
        ))}
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
