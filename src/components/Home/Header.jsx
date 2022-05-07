import React, { useState } from "react";

function Header() {
  const [navBackground, setNavBackground] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > window.innerHeight) {
      setNavBackground(true);
    }
    if (window.scrollY < window.innerHeight) {
      setNavBackground(false);
    }
  };

  return (
    <nav
      style={{
        boxShadow: navBackground
          ? "inset 0 0 0 1000px rgba(0, 0, 0, 1)"
          : "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
      }}
      className="navigation"
      id="navigation"
    >
      <div className="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className="menu">
        <div className="menu-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Computer repair</a>
            </li>
            <li>
              <a href="/">Phone repair</a>
            </li>
            <li>
              <a href="/">Home automation</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <div className="dropdown">
              <li className="dropbtn">
                <a href="/">
                  About &nbsp; <i className="fa fa-chevron-down"></i>
                </a>
              </li>
              <div className="dropdown-content">
                <a href="/">About us</a>
                <a href="/">Blog</a>
                <a href="/">Location</a>
                <a href="/">FAQ</a>
              </div>
            </div>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <a className="bars" href="/">
        <i className="fa-solid fa-bars"></i>
      </a>
    </nav>
  );
}

export default Header;
