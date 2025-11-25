import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-title">PIERRE RAMOS</div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
