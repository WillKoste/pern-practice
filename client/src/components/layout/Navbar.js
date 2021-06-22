import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand"><h2>E-Store</h2></Link>
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/cart"><i className="fas fa-shopping-cart"></i> Cart</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
