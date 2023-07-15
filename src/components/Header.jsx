import { Link, useLocation } from "react-router-dom";
import React from "react";
import './Header.css'
import logo from '../images/logo.png'

function Header() {
  let location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      <div id="navbar">
        <img src={logo} alt="Website logo" className = "logoimg"/>  
        <p id="websitename">CF-Speedrun</p>
        <ul id="nav">
          <li className="navitems">
            <Link
              className ={`navlink ${location.pathname === "/" ? "active" : ""}`}
              aria-current="page"
              to="/CF-Speedrun"
            >
              Home
            </Link>
          </li>
          <li className="navitems">
            <Link
              className ={`navlink ${
                location.pathname === "/about" ? "active" : ""
              }`}
              aria-current="page"
              to="/CF-Speedrun/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
