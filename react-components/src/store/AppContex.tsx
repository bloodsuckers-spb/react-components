import { createContext } from 'react';

import { initialState } from './initialState';

import { CreateContextProps } from './interfaces';

const AppContext = createContext<CreateContextProps>({
  state: initialState,
  dispatch: () => null,
});

export default AppContext;
