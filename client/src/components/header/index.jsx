import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">{/* logo */}</div>
      <div className="sear-container">{/* search */}</div>
      <div className="icons-container">
        <div className="icons">
          <Link to="/home">HOME</Link>
        </div>
        <div className="icons">ABOUT</div>
        <div className="icons">LIKES</div>
        <div className="icons">FAV</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
