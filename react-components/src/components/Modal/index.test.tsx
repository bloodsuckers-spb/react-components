import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './index';

const cardData = {
  id: 1,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [''],
  url: '',
  created: '',
};

const handler = jest.fn();

describe('tests for Modal window', () => {
  it('Modal renders properly', () => {
    render(<Modal card={cardData} handler={handler} />);
    expect(screen.getByRole('modal')).toBeInTheDocument();
  });
  it('Handler called by click on overlay', () => {
    render(<Modal card={cardData} handler={handler} />);
    const overlay = screen.getByRole('overlay');
    fireEvent.click(overlay);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
