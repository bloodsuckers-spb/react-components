import React, { Component, FormEvent } from 'react';
import './index.css';
import { IProps, IState, TFormEvent, IError } from './interfaces';
import { IFormCards, IFormData } from 'types/index';
import FormItem from 'components/FormItem';

export default class Form extends Component<IProps, IState> {
  private addCard;
  private itemsData;
  constructor(props: IProps) {
    super(props);
    this.state = {
      isDisabled: true,
      isValid: false,
      errors: props.data.map((el) => ({ id: el.id, isError: false })),
    };
    this.itemsData = props.data;
    this.addCard = props.addCard;
  }

  isErrors = () => {
    const { errors } = this.state;
    return errors.some((error) => error.isError);
  };

  getErrorsCount = () => {
    const { errors } = this.state;
    return errors.filter((error) => error.isError).length;
  };

  changeErrorState = (id: string, status: boolean) => {
    const errors = this.state.errors.map((error) => {
      if (error.id === id) {
        error.isError = status;
      }
      return error;
    });
    this.setState({ errors });
  };

  getImgUrl = (elem: Blob) => {
    return elem ? URL.createObjectURL(elem) : '';
  };

  getSwitchValue = (isChecked: boolean, values = ['Male', 'Female']) => {
    const [checked, unchecked] = values;
    return !isChecked ? checked : unchecked;
  };

  getValue = (form: HTMLFormElement, id: string, type?: string) => {
    const input = form[id];
    switch (type) {
      case 'file':
        return this.getImgUrl(input.files[0]);
      case 'checkbox':
        return id === 'switcher' ? this.getSwitchValue(input.checked) : input.checked;
      default:
        return input.value;
    }
  };

  validate = (value: string, type?: string) => {
    switch (type) {
      case 'text':
        return !this.isTextInputValid(value);
      case 'date':
        return !this.isDateValid(value);
      case 'file':
        return !this.isFileValid(value);
      case 'checkbox':
        return !this.isConfirm(value);
      default:
        return !this.isSelectValid(value);
    }
  };

  handleChange = (event: TFormEvent) => {
    console.log('handleChange');
    if (this.isErrors()) {
      const { id } = event.currentTarget;
      this.changeErrorState(id, false);
      if (!this.getErrorsCount()) {
        this.setState({ isDisabled: false });
      }
      return;
    }
    if (!this.isErrors() && this.state.isDisabled) {
      this.setState({ isDisabled: false });
      return;
    }
    if (this.state.isValid) {
      console.log('valid');
      this.setState({ isValid: false, isDisabled: false });
      return;
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let isValid = true;
    const errors: IError[] = [];
    const cardData: IFormCards = {};
    const { target } = event;
    if (!(target instanceof HTMLFormElement)) return;
    this.itemsData.forEach((data) => {
      const { id, type } = data;
      const value = this.getValue(target, id, type);
      cardData[id] = value;
      const isError = this.validate(value, type);
      if (isError) isValid = false;
      errors.push({ id, isError });
    });
    this.setState({ errors, isDisabled: true, isValid });
    isValid && this.createCard(target, cardData);
  };

  isTextInputValid = (value: string) => {
    return /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);
  };

  isSelectValid = (value: string) => {
    return !!value;
  };

  isDateValid = (value: string) => {
    return /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) && Date.now() - Date.parse(value) > 0;
  };

  isFileValid = (value: string) => {
    return !!value;
  };

  isConfirm = (value: string) => {
    return !!value;
  };

  createCard = (form: HTMLFormElement, data: IFormCards) => {
    this.addCard(data);
    form.reset();
  };

  hasError = ({ id }: IFormData) => {
    const elem = this.state.errors.find((item) => item.id === id);
    return !!elem?.isError;
  };

  render() {
    const { isDisabled, isValid } = this.state;
    const { handleChange, handleSubmit, itemsData } = this;
    return (
      <form className="form" onSubmit={handleSubmit} data-testid="react-form">
        {itemsData.map((data, i) => {
          const isError = this.hasError(data);
          return <FormItem key={i} isError={isError} data={data} handler={handleChange} />;
        })}
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
        {isValid && <p className="confirm-message">The data has been saved</p>}
      </form>
    );
  }
}
