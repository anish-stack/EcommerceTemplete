import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../../Assest/logo.png';

const Header = ({ increaseCount, count ,decreaseCount }) => {




  return (
    <header>
      <nav>
        <img src={logo} className='navbar-brand' alt="Logo"/>
        <ul className='navbar-list'>
          <li><Link className='nav-links' to="/">Home</Link></li>
          <li><Link className='nav-links' to="/shop">Shop</Link></li>
          <li><Link className='nav-links' to="/dev">Developers</Link></li>
          <li><Link className='nav-links' to="/contact">Contact</Link></li>
          <li><Link className='nav-links' to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="icons">
        <ul className="icons-side">
          <li><i className="nav-icons ri-search-line"></i></li>
          <li><i className="nav-icons ri-user-smile-fill"></i></li>
          <li><i className="nav-icons ri-heart-3-fill"></i></li>
         <Link to="/Cart"> <li>
            <i className="nav-icons cart ri-shopping-cart-2-line">
          
            </i>
            <span className='count'>{count}</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="mobiles">
        <ul className="mobile_icons">
          <li><i className=" mobile_icon menu ri-menu-2-line"></i></li>
          <li><i className=" mobile_icon open ri-close-line"></i></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
