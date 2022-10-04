interface IRoutes {
  path: string;
  element: JSX.Element;
}

export default interface AppRoutesProps {
  routes: IRoutes[];
}
