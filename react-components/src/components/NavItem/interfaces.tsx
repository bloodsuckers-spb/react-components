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

interface NavItemProps {
  data: INavLinkData;
}

export default NavItemProps;
