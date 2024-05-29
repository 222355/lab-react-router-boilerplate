import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Kalvium ❤️</Link>
          </li>
          <li className="right">
            <Link to="/about">About</Link>
          </li>
          <li className="right">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
