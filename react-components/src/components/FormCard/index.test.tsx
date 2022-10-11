import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from './index';

const card = {
  switcher: 'Male',
  firstName: 'Vitaly',
  lastName: 'Bakov',
  country: 'USA',
  profilePic: '',
  bornDate: '',
};

describe('FormCard test', () => {
  it('FormCard renders', () => {
    render(<FormCard data={card} />);
    expect(screen.getByTestId('form-card')).toBeInTheDocument();
  });
  it('FormCard renders with valid data', () => {
    render(<FormCard data={card} />);
    expect(screen.getByText(/Vitaly/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/USA/i)).toBeInTheDocument();
  });
});
