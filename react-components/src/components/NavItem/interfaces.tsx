interface INavLinkData {
  attributes: IAttributes;
  content: string;
}

interface IAttributes {
  to: string;
  role: string;
  end?: boolean;
  className: string;
}

export interface IProps {
  data: INavLinkData;
}
