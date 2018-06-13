import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="App-content">
    <div style={{ textAlign: 'center' }}>
      <h2>Ooops! Page not found</h2>
      <Link to="/">Go Home</Link>
    </div>
  </div>
);

export default NotFound;
