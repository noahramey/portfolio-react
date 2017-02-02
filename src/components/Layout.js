import React from 'react'
import { Link } from 'react-router'
import NavMenu from './NavMenu'

export default class Layout extends React.Component {
  render () {
    return (
      <div className="container">
        <header className="twelve columns">
          <Link to="/">
            <h3 className="logo-title">Noah Ramey</h3>
          </Link>
          <NavMenu />
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            Testing
          </p>
        </footer>
      </div>
    )
  }
}
