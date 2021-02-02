import React from 'react'
import { NavLink } from 'react-router-dom'


function Header (props) {
  return (
    <div className="container">
      <nav className="menu">
        <div className="row justify-content-center align-items-center">
          <div className="col-5">
            <h3 className="logo-cover">Cover</h3>
          </div>
          <nav className="col-auto menu-items">
            <NavLink
              className="menu-item"
              exact to="/"
            activeClassName="activeMenuItem">
            Home
          </NavLink>
            <NavLink
              className="menu-item"
              to="/features"
              activeClassName="activeMenuItem">
              Features
            </NavLink>
            <NavLink
              className="menu-item"
              to="/contact"
              activeClassName="activeMenuItem">
              Contact
            </NavLink>
          </nav>
        </div>
      </nav>
    </div>
  )
}

export default Header