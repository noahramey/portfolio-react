import React from 'react'
import { Link } from 'react-router'

export default class NavMenu extends React.Component {
  render () {
    return (
      <nav className="nav-menu">
        <Link key='home' to={`/`} className="three columns" activeClassName="active">Home</Link>
        <Link key='about' to={`/about`} className="three columns" activeClassName="active">About</Link>
        <Link key='projects' to={`/projects`} className="three columns" activeClassName="active">Projects</Link>
        <Link key='contact' to={`/contact`} className="three columns" activeClassName="active">Contact</Link>
      </nav>
    )
  }
}
