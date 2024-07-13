import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../About/About";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="header-icon">
        <i className="fas fa-home">🏠︎</i>
      </Link>
      <h1 className="header-title">ChatFill</h1>
      <Link to="/about" className="header-icon">
        <i className="fas fa-home">ℹ</i>
      </Link>
    </div>
  );
};

export default Header;
