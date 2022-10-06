import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navstyle.css";
import logo from "../images/logo.png";

export default function Navigation() {
  const [navBackground, setNavBackground] = useState(false);
  const [icon, setIcon] = useState(true);

  window.onscroll = function () {
    if (window.scrollY > window.innerHeight) {
      setNavBackground(true);
    }
    if (window.scrollY < window.innerHeight) {
      setNavBackground(false);
    }
  };

  function handleDropClick(e) {
    if (icon) {
      setIcon(false);
      document.getElementById("dropDownContent").style.display = "block";
      document.getElementById("dropDownContent").style.transform =
        "translateY(0)";
    } else {
      setIcon(true);
      document.getElementById("dropDownContent").style.display = "none";
      document.getElementById("dropDownContent").style.transform =
        "translateY(0)";
    }
  }

  // const style = { "--i": .15 } as React.CSSProperties

  return (
    <>
      <header>
        <div class="container1">
          <input type="checkbox" name="" id="check" />

          <div class="logo-container">
            <img
              src={logo}
              // style={{ borderRadius: "50%" }}
              height="50px"
              alt=""
            />
          </div>

          <div class="nav-btn">
            <div class="nav-links">
              <ul>
                <li class="nav-link">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-link">
                  <NavLink className="nav-link" to="/repairs">
                    Repairs
                  </NavLink>
                </li>
                <li class="nav-link">
                  <NavLink className="nav-link" to="/automation">
                    Automation
                  </NavLink>
                </li>
                <li class="nav-link">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li class="nav-link">
                  <a href="#">
                    About<i class="fas fa-caret-down"></i>
                  </a>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <NavLink to="/">About us</NavLink>
                      </li>
                      <li class="dropdown-link">
                        <NavLink to="/">Blog</NavLink>
                      </li>
                      <li class="dropdown-link">
                        <NavLink to="/">Location</NavLink>
                      </li>
                      <li class="dropdown-link">
                        <NavLink to="/">FAQ</NavLink>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="hamburger-menu-container">
            <div class="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
