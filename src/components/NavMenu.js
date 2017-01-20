import React from 'react';
import { Link } from 'react-router';

export default class NavMenu extends React.Component {
  render() {
    return (
      <nav className="nav-menu">
        <Link key='home' to={`/`} activeClassName="active">Home</Link>
        <Link key='about' to={`/about`} activeClassName="active">About</Link>
        <Link key='projects' to={`/projects`} activeClassName="active">Projects</Link>
        <Link key='contact' to={`/contact`} activeClassName="active">Contact</Link>
      </nav>
    );
  }
}
