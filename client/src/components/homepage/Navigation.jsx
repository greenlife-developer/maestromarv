import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navstyle.css";
import logo from "../images/logo.png";

export default function Navigation() {
  const [navBackground, setNavBackground] = useState(false);
  // const [icon, setIcon] = useState(true);

  window.onscroll = function () {
    if (window.scrollY > window.innerHeight) {
      setNavBackground(true);
    }
    if (window.scrollY < window.innerHeight) {
      setNavBackground(false);
    }
  };

  return (
    <>
      <header style={{backgroundColor: navBackground ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, .3)" }}>
        <div className="container1">
          <input type="checkbox" name="" id="check" />

          <div className="logo-container">
            <img
              src={logo}
              height="50px"
              alt=""
            />
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/repairs">
                    Repairs
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/automation">
                    Automation
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-link">
                  <a href="#">
                    About<i className="fas fa-caret-down"></i>
                  </a>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <NavLink to="/">About us</NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/">Blog</NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/">Location</NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/">FAQ</NavLink>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>

          <div className="login-register">
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
