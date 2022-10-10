import React, { Component, FormEvent } from 'react';
import './index.css';
import { IProps, IState, IErrors, IFormData, TFormEvent } from './interfaces';
import FormItem from 'components/FormItem';

export default class Form extends Component<IProps, IState> {
  private addCard;
  private formItems;
  private isInvalid = false;
  constructor(props: IProps) {
    super(props);
    this.state = {
      isDisabled: true,
      errors: {},
    };
    const { data, fn } = props;
    this.formItems = data;
    this.addCard = fn;
  }

  isErrors = (errors: IErrors) => {
    return Object.values(errors).some((value) => value);
  };

  setErrors = (errors: IErrors) => {
    this.setState({ errors });
  };

  setDisabledStatus = (status: boolean) => {
    this.setState({ isDisabled: status });
  };

  deleteErrors = (id: string) => {
    const errors = this.state.errors;
    errors[id] = false;
    this.setErrors(errors);
    if (!this.isErrors(errors)) {
      this.isInvalid = false;
    }
  };

  getImgUrl = (elem: Blob) => {
    return elem ? URL.createObjectURL(elem) : '';
  };

  getErrors = (type: string | undefined, value: string) => {
    switch (type) {
      case 'text':
        return !this.isTextInputValid(value);
      case 'date':
        return !this.isDateValid(value);
      case 'file':
        return !this.isFileValid(value);
      default:
        return !this.isSelectValid(value);
    }
  };

  handleChange = (event: TFormEvent) => {
    if (!this.isInvalid && !this.state.isDisabled) {
      return;
    }
    if (!this.isInvalid && this.state.isDisabled) {
      this.setDisabledStatus(false);
      return;
    }
    if (this.isInvalid && this.state.isDisabled) {
      this.setDisabledStatus(false);
    }
    const { id } = event.currentTarget;
    this.deleteErrors(id);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.validate(event.target);
  };

  validate = (target: EventTarget) => {
    const errors: IErrors = {};
    const cardData: IFormData = {};
    if (target instanceof HTMLFormElement) {
      this.formItems.forEach((data) => {
        const { id, type } = data;
        const input = target[id];
        const value = type === 'file' ? this.getImgUrl(input.files[0]) : input.value;
        cardData[id] = value;
        errors[id] = this.getErrors(type, value);
      });
    }
    this.setErrors(errors);
    this.isInvalid = this.isErrors(errors);
    if (!this.isInvalid) {
      this.addCard(cardData);
      target instanceof HTMLFormElement && target.reset();
    }
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

  render() {
    const { errors, isDisabled } = this.state;
    const { handleChange, handleSubmit, formItems } = this;
    return (
      <form className="form" onSubmit={handleSubmit}>
        {formItems.map((data, i) => {
          const { id } = data;
          return <FormItem key={i} isError={errors[id]} data={data} handler={handleChange} />;
        })}
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      </form>
    );
  }
}
