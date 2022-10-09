export interface ICards {
  [key: string]: string;
}

export type FormProps = Record<string, never>;
export interface FormState {
  cards: ICards[];
}
