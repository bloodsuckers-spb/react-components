import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './index';
import { results } from 'mocks/constants';

const [cardData] = results;
const handler = jest.fn();

describe('tests for Modal window', () => {
  it('Modal renders properly', () => {
    render(<Modal card={cardData} openModalHandler={handler} />);
    expect(screen.getByRole('modal')).toBeInTheDocument();
  });
  it('Handler called by click on overlay', () => {
    render(<Modal card={cardData} openModalHandler={handler} />);
    const overlay = screen.getByRole('overlay');
    fireEvent.click(overlay);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
