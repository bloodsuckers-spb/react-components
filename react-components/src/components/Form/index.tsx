import React, { Component, FormEvent } from 'react';
import './index.css';
import { IProps, IState, IErrors, IFormData, TFormEvent } from './interfaces';
import FormItem from 'components/FormItem';

export default class Form extends Component<IProps, IState> {
  private addCard;
  private formItems;
  private isInvalid = false;
  private isMsgActive = false;
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

  getValue = (form: HTMLFormElement, id: string, type?: string) => {
    const input = form[id];
    switch (type) {
      case 'file':
        return this.getImgUrl(input.files[0]);
      case 'checkbox':
        return input.checked;
      default:
        return input.value;
    }
  };

  validate = (type: string | undefined, value: string) => {
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

  setValidationResult = (errors: IErrors) => {
    this.setErrors(errors);
    this.isInvalid = this.isErrors(errors);
    return this.isInvalid;
  };

  handleChange = (event: TFormEvent) => {
    const { id } = event.currentTarget;
    const err = { ...this.state.errors };

    if (this.isMsgActive) {
      this.isMsgActive = false;
    }

    if (!this.isInvalid && !this.state.isDisabled) {
      return;
    }

    if (!this.isInvalid && this.state.isDisabled) {
      this.setDisabledStatus(false);
      return;
    }

    err[id] = false;

    if (this.isInvalid && !this.isErrors(err)) {
      this.setDisabledStatus(false);
    }
    this.deleteErrors(id);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const errors: IErrors = {};
    const cardData: IFormData = {};
    const { target } = event;
    if (!(target instanceof HTMLFormElement)) return;
    this.formItems.forEach((data) => {
      const { id, type } = data;
      const value = this.getValue(target, id, type);
      cardData[id] = value;
      errors[id] = this.validate(type, value);
    });
    this.setDisabledStatus(true);
    if (this.setValidationResult(errors)) return;
    this.createCard(target, cardData);
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

  createCard = (form: HTMLFormElement, data: IFormData) => {
    this.addCard(data);
    this.isMsgActive = true;
    form.reset();
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
        <p className={this.isMsgActive ? '' : 'hide'}>The data has been saved</p>
      </form>
    );
  }
}
