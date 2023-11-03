import React from "react";
import logo from "../../../Assest/logo.png";
import { Link } from "react-router-dom";
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-col">
          <img src={logo} alt="" />
        </div>
        <div className="footer-col">
          <ul>
            <li>
              <Link to="/store-locator">Store Locator</Link>
            </li>
            <li>
              <Link to="/Opening-hours">Opening Hours</Link>
            </li>
            <li>
              <Link to="/Privacy-polices">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>
              <Link to="/insta">
                <i class="ri-instagram-line"></i>
              </Link>
            </li>
            <li>
              <Link to="/twitter">
                <i class="ri-twitter-fill"></i>
              </Link>
            </li>
            <li>
              <Link to="/facebook">
                <i class="ri-facebook-circle-fill"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copy">
      <p>&copy;2023 All rights reserved. Design By DevAnish </p>
      </div>

    </>
  );
};

export default Footer;
