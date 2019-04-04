import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../pages';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      {links.map(link => (
        <li key={link.title}>
          <NavLink to={link.link}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
