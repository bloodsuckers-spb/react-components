import React, { Component } from 'react';

enum inputTypes {
  text = 'text',
  date = 'date',
  checkbox = 'checkbox',
}

interface FormItemData {
  id: string;
  type: string;
  errorMsg: string;
  title: string;
  ref: React.RefObject<HTMLInputElement>;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface FormItemProp {
  data: FormItemData;
}

export default class FormInput extends Component<FormItemProp> {
  title = '';
  id = '';
  type = '';
  errorMsg = '';
  ref;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
  constructor(props: FormItemProp) {
    super(props);
    const { title, errorMsg, id, type, ref, handler } = props.data;
    this.title = title || '';
    this.errorMsg = errorMsg;
    this.id = id;
    this.type = type;
    this.ref = ref;
    this.handler = handler;
  }
  render() {
    const { title, errorMsg, id, type, ref, handler } = this;
    return (
      <>
        <label htmlFor={id}>{title}</label>
        <input id={id} type={type} ref={ref} onChange={handler} autoComplete="off"></input>
        <p>{errorMsg}</p>
      </>
    );
  }
}
