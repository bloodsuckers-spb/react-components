import React from 'react';
import axios from 'axios';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './index';

jest.mock('axios');

// const hits = [

// ];

// describe('Home', () => {
//   it('fetches smth from an API', async () => {
//     axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits } }));
//   });
// });

// import { render, screen } from '@testing-library/react';

// test('render Cards', () => {
//   render(<Home />);
//   const cards = screen.getAllByRole('card');
//   let counter = 0;
//   cards.forEach((card) => {
//     expect(card).toBeInTheDocument();
//     counter += 1;
//   });
//   expect(counter).toBe(8);
//   render(<Home />);
//   const arrayOfcards = screen.getAllByRole('card');
//   expect(arrayOfcards.length).toBeGreaterThan(counter);
// });
