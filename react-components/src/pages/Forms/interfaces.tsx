export interface ICards {
  firstName: string;
  lastName: string;
  country: string;
}

export type FormProps = Record<string, never>;
export interface FormState {
  cards: ICards[];
}
