export enum countries {
  USA = 'USA',
  Germany = 'Germany',
  England = 'England',
  Sweden = 'Sweden',
}

export interface textInputProp {
  content: string;
  id: string;
}

export type FormProps = Record<string, never>;
export type refInput = React.RefObject<HTMLInputElement>;
export type refSelect = React.RefObject<HTMLSelectElement>;
