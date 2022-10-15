export interface IFormData {
  id: string;
  tag?: string;
  type?: string;
  title: string;
  errorMessage: string;
  className: string;
  placeholder: string;
}

export interface IFormCards {
  [key: string]: string;
}
