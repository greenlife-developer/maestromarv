import React, { useState } from "react";

function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const [icon, setIcon] = useState(true)

  window.onscroll = function () {
    if (window.scrollY > window.innerHeight) {
      setNavBackground(true);
    }
    if (window.scrollY < window.innerHeight) {
      setNavBackground(false);
    }
  };

  function handleDropClick(e) {
    if(icon){
      setIcon(false)
      document.getElementById('dropDownContent').style.display = "block"
      document.getElementById('dropDownContent').style.transform = "translateY(0)"
    } else{
      setIcon(true)
      document.getElementById('dropDownContent').style.display = "none"
      document.getElementById('dropDownContent').style.transform = "translateY(0)"

    }
  }

  return (
    <nav
      style={{
        boxShadow: navBackground
          ? "inset 0 0 0 1000px rgba(0, 0, 0, 1)"
          : "inset 0 0 0 1000px rgba(0, 0, 0, 0.3)",
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
              <a href="/">Computer Repair</a>
            </li>
            <li>
              <a href="/">Phone Repair</a>
            </li>
            <li>
              <a href="/">Home Automation</a>
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
      <div className="dropdown">
        <div className="bars">
          <i
            onClick={handleDropClick}
            className={icon ? "fa-solid fa-bars dropbtn dropdown" : "fa-solid fa-xmark dropbtn dropdown" }
          ></i>
          <div className="dropdown">
            <div className="dropdown-content" id="dropDownContent">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Computer Repair</a>
                </li>
                <li>
                  <a href="/">Phone Repair</a>
                </li>
                <li>
                  <a href="/">Home Automation</a>
                </li>
                <li>
                  <a href="/">Products</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Location</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li className="cart">
                  <span
                    style={{
                      backgroundColor: "green",
                      padding: "3px 8px",
                      borderRadius: "40%",
                      color: "#f5f5f5",
                    }}
                  >
                    0
                  </span>{" "}
                  <i className="fa-solid fa-shopping-cart"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        <span
          style={{
            backgroundColor: "green",
            padding: "3px 8px",
            borderRadius: "40%",
            color: "#f5f5f5",
          }}
        >
          0
        </span>{" "}
        <i className="fa-solid fa-shopping-cart"></i>
      </div>
    </nav>
  );
}

export default Header;
