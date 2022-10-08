interface FormSelectData {
  id: string;
  title: string;
  errorMsg: string;
  ref: React.RefObject<HTMLSelectElement>;
}

export interface FormSelectProps {
  data: FormSelectData;
  handler: (event: React.FormEvent<HTMLSelectElement>) => void;
}
