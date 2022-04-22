import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='container-fluid'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Heroes App</Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/marvel">Marvel</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dc">DC Comics</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link " to="/search">Search</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
    
  )
}
