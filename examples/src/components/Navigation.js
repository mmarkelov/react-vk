import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../pages';

const Navigation = () => (
  <nav>
    <ul>
      {links.map(link => (
        <li key={link.title}>
          <NavLink exact={link.link === '/'} to={link.link}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
