interface IRoutes {
  path: string;
  element: JSX.Element;
}

export interface AppRoutesProps {
  routes: IRoutes[];
}
