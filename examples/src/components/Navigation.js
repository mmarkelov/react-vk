import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const links = [
    { link: '/login', title: 'Authorization' },
    { link: '/comments', title: 'Comments' },
    { link: '/community', title: 'Community Messages' },
    { link: '/like', title: 'Like' },
    { link: '/group', title: 'Community' },
    { link: '/playlist', title: 'Playlist' },
    { link: '/contact', title: 'Contact Us' },
    { link: '/subscribe', title: 'Subscribe to Author' },
    { link: '/recommend', title: 'Recommendations' },
    { link: '/poll', title: 'Poll' },
    { link: '/post', title: 'Post' },
    { link: '/app', title: 'App' },
    { link: '/article', title: 'Article' }
  ];
  return (
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
};

export default Navigation;
