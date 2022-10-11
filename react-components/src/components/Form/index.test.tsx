import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

import formData from '../../constants/formData';

const cb = () => {};

describe('form test', () => {
  it('Form renders properly', () => {
    render(<Form data={formData} fn={cb} />);
    expect(screen.getByTestId('react-form')).toBeInTheDocument();
  });
  it('submit btn should be disabled after initialization', () => {
    render(<Form data={formData} fn={cb} />);
    const submitBtn = screen.getByText(/submit/i);
    expect(submitBtn).toHaveAttribute('disabled');
  });
  it('submit btn should be enable for non-empty value', () => {
    render(<Form data={formData} fn={cb} />);
    const nameInput = screen.getByPlaceholderText('Name');
    const submitBtn = screen.getByText(/submit/i);
    expect(submitBtn).toHaveAttribute('disabled');
    fireEvent.change(nameInput, { target: { value: 'hello' } });
    expect(submitBtn).not.toHaveAttribute('disabled');
  });
});
