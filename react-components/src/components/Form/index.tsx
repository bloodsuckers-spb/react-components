import React, { Component, FormEvent } from 'react';
import './index.css';
import { countries, FormProps, FormState, ErrorsKey, IErrors } from './interfaces';
import { refInput, refSelect } from './interfaces';
// import SelectOptions from '../SelectOption';
import FormInput from '../FormInput';
import FormSelect from 'components/FormSelect';
import inputData from '../../constants/inputData';
import selectData from '../../constants/selectData';

export default class Form extends Component<FormProps, FormState> {
  private firstName: refInput = React.createRef();
  private lastName: refInput = React.createRef();
  private birthday: refInput = React.createRef();
  private profilePic: refInput = React.createRef();
  private country: refSelect = React.createRef();
  // private selectOptions: Readonly<string[]> = Object.values(countries);
  private addCard;
  private inputData;
  private selectData;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      isDisabled: true,
      errors: {
        firstName: '',
        lastName: '',
        birthday: '',
        profilePic: '',
        country: '',
      },
    };
    this.addCard = props.fn;
    const { firstName, lastName, birthday, profilePic, country, state } = this;
    const refArray = [firstName, lastName, birthday, profilePic];
    this.inputData = inputData.map((item, i) => Object.assign(item, { ref: refArray[i] }));
    const selectErrMsg = state.errors.country;
    this.selectData = Object.assign(selectData, { errorMsg: selectErrMsg, ref: country });
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
    const { isDisabled, errors } = this.state;
    const { inputData, selectData, handleChange, handleSubmit } = this;
    return (
      <form className="form" onSubmit={handleSubmit}>
        {inputData.map((data, i) => {
          const { id } = data;
          return <FormInput key={i} data={data} errorMsg={errors[id]} handler={handleChange} />;
        })}
        <FormSelect data={selectData} handler={handleChange} />
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      </form>
    );
  }
}
