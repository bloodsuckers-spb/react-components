import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Tests for Home page', () => {
  it('Component Home renders properly', () => {
    render(<Home />);
    const element = screen.getByTestId('home');
    expect(element).toBeInTheDocument();
  });
});
