import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormInput from './index';
import formData from '../../constants/formData';
const [data] = formData;
const isError = false;
const handler = () => {};
const { placeholder } = data;

describe('FormInput tests', () => {
  it('FormInput renders properly', () => {
    render(<FormInput data={data} isError={isError} handler={handler} />);
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });
  it('Is FormInput value is correct', () => {
    render(<FormInput data={data} isError={isError} handler={handler} />);
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument;
    fireEvent.change(input, { target: { value: 'hello' } });
    if (input instanceof HTMLInputElement) {
      expect(input.value).toBe('hello');
    }
  });
});
