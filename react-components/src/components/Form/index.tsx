import React, { Component, FormEvent } from 'react';
import './index.css';
import { IProps, IState, IErrors, IFormData, TFormEvent, IData } from './interfaces';

import FormItem from 'components/FormItem';
import formData from '../../constants/formData';

export default class Form extends Component<IProps, IState> {
  private addCard;
  private formItems;
  private itemsId: string[] = [];
  private isInvalid = false;
  constructor(props: IProps) {
    super(props);
    this.state = {
      isDisabled: true,
      errors: {},
    };
    this.formItems = formData.reduce((acc: IData, curr) => {
      const { id, ...rest } = curr;
      acc[id] = {
        ref: React.createRef(),
        ...rest,
      };
      return acc;
    }, {});
    this.itemsId = Object.keys(this.formItems);
    this.addCard = props.fn;
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

  getValue = (key: string) => {
    const { ref } = this.formItems[key];
    return ref.current!.value;
  };

  deleteErrors = (id: string) => {
    const errors = this.state.errors;
    errors[id] = false;
    this.setErrors(errors);
    if (!this.isErrors(errors)) {
      this.isInvalid = false;
    }
  };

  createCard = (target: Element) => {
    const data = this.getCardData();
    target instanceof HTMLFormElement && target.reset();
    this.addCard(data);
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
    const { validate, isErrors, setErrors, setDisabledStatus, createCard } = this;
    const errors = validate();
    setErrors(errors);
    this.isInvalid = isErrors(errors);
    setDisabledStatus(true);
    !this.isInvalid && createCard(event.currentTarget);
  };

  validate = () => {
    const errors: IErrors = {};
    const { formItems, getValue } = this;
    for (const key of this.itemsId) {
      const value = getValue(key);
      const { type } = formItems[key];
      switch (type) {
        case 'text':
          errors[key] = !this.isTextInputValid(value);
          break;
        case 'date':
          errors[key] = !this.isDateValid(value);
          break;
        case 'file':
          errors[key] = !this.isFileValid(value);
          break;
        default:
          errors[key] = !this.isSelectValid(value);
          break;
      }
    }
    return errors;
  };

  isTextInputValid = (value: string) => {
    return /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);
  };

  isSelectValid = (value: string) => {
    return !!value.length;
  };

  isDateValid = (value: string) => {
    return /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) && Date.now() - Date.parse(value) > 0;
  };

  isFileValid = (value: string) => {
    return !!value.length;
  };

  getCardData = () => {
    const { getValue, formItems, itemsId } = this;
    return itemsId.reduce((acc: IFormData, curr) => {
      if (formItems[curr].type === 'file') {
        const { ref } = this.formItems[curr];
        if (ref.current instanceof HTMLInputElement) {
          const profileImg = ref.current.files;
          acc[curr] = profileImg instanceof FileList ? URL.createObjectURL(profileImg[0]) : '';
        }
      } else {
        acc[curr] = getValue(curr);
      }
      return acc;
    }, {});
  };

  render() {
    const { errors, isDisabled } = this.state;
    const { itemsId, handleChange, handleSubmit, formItems } = this;
    return (
      <form className="form" onSubmit={handleSubmit}>
        {itemsId.map((id, i) => {
          const data = formItems[id];
          return (
            <FormItem key={i} isError={errors[id]} id={id} data={data} handler={handleChange} />
          );
        })}
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      </form>
    );
  }
}
