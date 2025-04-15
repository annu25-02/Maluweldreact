import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
            <Link to="/">
                <img src="images/logo-mohit.jpg" alt="logo" height="50" width="150" />
            </Link>
        </div>
        <ul id="hea">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="menu-toggle">
            <i className="fas fa-bars"></i>
        </div>
    </nav>
    </>
  )
}

export default Navbar
