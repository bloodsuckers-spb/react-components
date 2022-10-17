export type IProps = Record<string, never>;

export interface IState {
  characters: ICaracter[];
}

export interface IResponse {
  info: IResInfo;
  results: ICaracter[];
}

export interface IResInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface ICaracter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
