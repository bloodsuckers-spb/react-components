import React from 'react';
import { NavLink } from 'react-router-dom';

import { IProps } from './interfaces';

const NavItem = ({ data: { content, attributes } }: IProps) => {
  return <li>{<NavLink {...attributes}>{content}</NavLink>}</li>;
};

export default NavItem;
