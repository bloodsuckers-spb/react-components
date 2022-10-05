import React, { Component, FormEvent } from 'react';
import './index.css';
import { countries, textInputProp, FormProps } from './interfaces';
import { refInput, refSelect } from './interfaces';
import TextInput from '../TextInput';
import SelectOptions from '../SelectOption';

interface FormState {
  isDisabled: boolean;
}

const textInputProps: textInputProp[] = [
  {
    content: 'First Name:',
    id: 'firstName',
  },
  {
    content: 'Last Name:',
    id: 'lastName',
  },
];

export default class Form extends Component<FormProps, FormState> {
  private firstName: refInput = React.createRef();
  private lastName: refInput = React.createRef();
  private birthday: refInput = React.createRef();
  private country: refSelect = React.createRef();
  private fileUpload: refInput = React.createRef();
  private selectOptions: Readonly<string[]> = Object.values(countries);
  constructor(props: FormProps) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  changeDisabledStatus = () => {
    const { isDisabled } = this.state;
    this.setState({ isDisabled: !isDisabled });
  };

  // event: React.FormEvent<HTMLInputElement>

  handleChange = () => {
    console.log(this.firstName.current?.value);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {textInputProps.map((item, i) => {
          const ref = !i ? this.firstName : this.lastName;
          return <TextInput key={i} data={item} refer={ref} fn={this.handleChange} />;
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
