import { rest } from 'msw';
import { charactersLink } from '../constants/API';
import { results } from './constants';

export const handlers = [
  rest.get(charactersLink, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        info: {
          count: 826,
          pages: 42,
          next: 'https://rickandmortyapi.com/api/character/?page=20',
          prev: 'https://rickandmortyapi.com/api/character/?page=18',
        },
        results: results,
      })
    );
  }),
];
