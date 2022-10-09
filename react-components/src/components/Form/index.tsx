import React, { Component, FormEvent } from 'react';
import './index.css';
import { countries, FormProps, FormState } from './interfaces';
// import SelectOptions from '../SelectOption';

import FormItem from 'components/FormItem';
import formData from '../../constants/formData';

interface IData {
  [key: string]: IDataItem;
}

interface IFormData {
  [key: string]: string;
}

type TRef = React.RefObject<HTMLInputElement | HTMLSelectElement>;

type TFormEvent = React.FormEvent<HTMLInputElement | HTMLSelectElement>;

interface IDataItem {
  tag?: string;
  type?: string;
  title: string;
  isError: boolean;
  errMsg: string;
  ref: TRef;
}

export default class Form extends Component<FormProps, FormState> {
  private addCard;
  private formItems;
  private errCount = 0;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      isDisabled: true,
    };

    this.addCard = props.fn;
    this.formItems = formData.reduce((acc: IData, curr) => {
      const { id, ...rest } = curr;
      acc[id] = {
        ref: React.createRef(),
        isError: false,
        ...rest,
      };
      return acc;
    }, {});
  }

  setDisabledStatus = (status: boolean) => {
    this.setState({ isDisabled: status });
  };

  setErrStatus = (key: string, status: boolean) => {
    const { formItems, errCount } = this;
    formItems[key].isError = status;
    this.errCount = status ? errCount + 1 : errCount - 1;
  };

  getItemsKeys = () => Object.keys(this.formItems);

  handleChange = (event: TFormEvent) => {
    const { isDisabled } = this.state;
    const { errCount, setErrStatus, setDisabledStatus } = this;

    if (!errCount && isDisabled) setDisabledStatus(false);

    if (errCount > 0) {
      const { currentTarget } = event;
      // TODO
      const id = currentTarget.id.trim();
      currentTarget.style.border = '1px solid transparent';
      setErrStatus(id, false);
      if (!errCount && isDisabled) {
        setDisabledStatus(false);
      }
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.validate();
  };

  validate = () => {
    const { formItems, getItemsKeys, getValue } = this;
    const { isTextInputValid, isDateValid, isSelectValid } = this;
    const itemsKeys = getItemsKeys();
    for (const key of itemsKeys) {
      const value = getValue(key);
      const { type } = formItems[key];
      switch (type) {
        case 'text':
          if (!isTextInputValid(value)) {
            this.setErrStatus(key, true);
          }
          break;
        case 'date':
          if (!isDateValid(value)) {
            this.setErrStatus(key, true);
          }
          break;
        case undefined:
          if (!isSelectValid(value)) {
            this.setErrStatus(key, true);
          }
          break;
        default:
          break;
      }
    }
    const { errCount } = this;
    if (errCount > 0) {
      this.setDisabledStatus(true);
    } else {
      this.createCard();
    }
  };

  getValue = (key: string) => {
    const { ref } = this.formItems[key];
    return ref.current!.value;
  };

  isTextInputValid = (value: string) => {
    return value.length > 2 && /^[A-Z][a-z]+|[А-Я][а-я]+$/.test(value);
  };

  isSelectValid = (value: string) => {
    return value.length;
  };

  isDateValid = (value: string) => {
    return /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) && Date.now() - Date.parse(value) > 0;
  };

  createCard = () => {
    const { getItemsKeys, getValue, formItems } = this;
    const itemsKeys = getItemsKeys();
    const formData = itemsKeys.reduce((acc: IFormData, curr) => {
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
    this.addCard(formData);
  };

  render() {
    const { isDisabled } = this.state;
    const { getItemsKeys, handleChange, handleSubmit, formItems } = this;
    return (
      <form className="form" onSubmit={handleSubmit}>
        {getItemsKeys().map((objKey, i) => {
          const data = formItems[objKey];
          return <FormItem key={i} id={objKey} data={data} handler={handleChange} />;
        })}
        <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      </form>
    );
  }
}
