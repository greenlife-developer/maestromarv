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
      <header
        style={{
          backgroundColor: navBackground
            ? "rgba(0, 0, 0, 1)"
            : "rgba(0, 0, 0, .3)",
        }}
      >
        <div className="container1">
          <div className="logo-container">
            <img src={logo} height="50px" alt="" />
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
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    className="nav-link"
                    to="/make-appointment/first-contact/"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-link nav-button">
                  <a href="#">
                    About &nbsp; <i className="fas fa-caret-down"></i>
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

          <div className="login-register">
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </div>

          <div className="btn-group">
            <div
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              className="dropbtx btn"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              class="offcanvas offcanvas-end"
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body mobile-navs">
                <div className="navs">
                  <div className="nav-items">
                    <div className="nav-item">
                      <i class="fa-solid fa-house"></i>
                      <span>Home</span>
                    </div>
                    <div className="nav-item">
                      <i class="fa-solid fa-screwdriver-wrench"></i>
                      <span>Repairs</span>
                    </div>
                    <div className="nav-item">
                      <i class="fa-solid fa-box-open"></i>
                      <span>Products</span>
                    </div>
                    <div className="nav-item">
                      <i class="fa-solid fa-inbox"></i>
                      <span>Contact</span>
                    </div>
                    <div className="nav-item">
                      <i class="fa-solid fa-circle-info"></i>
                      <span>About</span>
                    </div>
                    <div className="nav-item">
                      <i class="fa-solid fa-house-laptop"></i>
                      <span>Computer Repair</span>
                    </div>
                    <div className="nav-item">
                      <i class="fa-solid fa-location-dot"></i>
                      <span>Location</span>
                    </div>
                  </div>

                  <div className="login-register1">
                    <button>
                      <Link to="/login">Login</Link>
                    </button>
                    <button>
                      <Link to="/register">Register</Link>
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
