import React from 'react';
import { NavLink, Link } from "react-router-dom";

// Styles
import './Header.sass'

// Logo
import Logo from '../../assets/img/logo.png';

const Header = () => (
  <header className="header">
    <div className="header__inner">
      <div className="header__logo">
        <Link to="/" replace>
          <img src={Logo} alt="Batman Logo"/>
        </Link>
      </div>
      <nav className="header__nav">
        <NavLink exact className="header__nav-item" activeClassName="header__nav-item--active" to="/">Home</NavLink>
        <NavLink className="header__nav-item" activeClassName="header__nav-item--active" to="/about">About</NavLink>
      </nav>
    </div>
  </header>
);

export default Header;