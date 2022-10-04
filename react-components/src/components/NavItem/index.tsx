import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItemProps from './interfaces';

const NavItem = ({ data }: NavItemProps) => {
  const { content, attributes } = data;
  return <li>{<NavLink {...attributes}>{content}</NavLink>}</li>;
};

export default NavItem;
