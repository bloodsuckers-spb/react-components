// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import App from 'App';
// import userEvent from '@testing-library/user-event';

// test('renders SearchBar', async () => {
//   render(<App />);
//   const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
//   fireEvent.change(input, { target: { value: 'aaa' } });
//   expect(input.value).toBe('aaa');
//   userEvent.click(screen.getByRole('link', { current: false }));
//   await waitFor(() => {
//     expect(screen.getByText(/About Us/)).toBeInTheDocument();
//   });
//   expect(localStorage.getItem('searchValue')).toBe('aaa');
// });
