import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

import { Button } from "../Button";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-main mb-1">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" /> Products
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="link-item">
              <Link to="/cart" className="nav-link">
                <Button>
                  <i className="fa fa-cart-arrow-down"></i> Cart
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
