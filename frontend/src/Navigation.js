import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">front Page</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;