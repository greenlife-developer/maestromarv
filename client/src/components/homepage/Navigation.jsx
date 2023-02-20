import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./navstyle.css";
import logo from "../images/logo.png";

export default function Navigation() {
  const currentLocation = useLocation();
  // console.log(currentLocation.pathname)
  const redirect = useNavigate();
  const [navBackground, setNavBackground] = useState("");
  const [login, setLogin] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);

  const handleLogOut = () => {
    axios.get("/api/logout").then((res) => {
      redirect("/?message=logged_out");
    });
  };

  const handleMenu = () => {
    console.log("menu is clicked");
    setChangeIcon(!changeIcon);
  };

  useEffect(() => {
    axios.get("/api").then((data) => {
      console.log("data from api", data.data.isLogin);
      if (data.data.isLogin === true) {
        setLogin(data.data.isLogin);
      }
    });

    window.onscroll = function () {
      if (currentLocation.pathname === "/") {
        if (window.scrollY > window.innerHeight) {
          setNavBackground("rgba(0, 0, 0, 1)");
        }
        if (window.scrollY < window.innerHeight) {
          setNavBackground("rgba(0, 0, 0, .3)");
        }
      } else {
        setNavBackground("rgba(0, 0, 0, 1)");
      }
    };
  });

  return (
    <>
      <header
        style={{
          // backgroundColor: navBackground,
          background:
            "linear-gradient(273.29deg, rgba(2, 2, 107, 0.2) 0%, rgba(7, 10, 173, 0.1) 20.24%, rgba(255, 255, 255, 0.1) 67.09%, rgba(255, 255, 255, 0.1) 67.09%)",
          borderBottom:
            "linear-gradient(273.29deg,  #02026B 0%, #02026B 20.24%, #EBF1FF 67.09%, #EBF1FF 67.09%)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container1">
          <div className="logo-container">
            <Link to="/#">
              <img src={logo} height="50px" alt="" />
            </Link>
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/repairs#">
                    Repairs
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/products#">
                    Products
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    className="nav-link"
                    to="/make-appointment/first-contact/#"
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
                        <NavLink to="/#">About us</NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/#">Blog</NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/#">Location</NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/#">FAQ</NavLink>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="login-register">
            {login ? (
              <button className="login-fill">
                <a className="login-fill-btn" onClick={handleLogOut} href="#">
                  Log out
                </a>
              </button>
            ) : (
              <>
                <button className="login-fill">
                  <Link className="login-fill-btn" to="/login#">
                    Login
                  </Link>
                </button>
                <button>
                  <Link className="login-normal-btn" to="/register#">
                    Register
                  </Link>
                </button>
              </>
            )}
          </div>

          <div className="mobile-nav-style">
            <div className="menu-bar">
              <div className="cart-icon">
                <i class="ri-shopping-cart-2-line"></i>
                <sup className="cart-no">1</sup>
              </div>
              <div className="menu-icon" onClick={handleMenu}>
                {changeIcon ? (
                  <div>
                    <div className="icon-x"></div>
                  </div>
                ) : (
                  <div className="">
                    <div className="width">
                      <div className="width-1"></div>
                    </div>
                    <div className="width">
                      <div className="width-2"></div>
                    </div>
                    <div className="width">
                      <div className="width-3"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {changeIcon ? (
              <div className="menu-items-mobile">
                <div className="">
                  <div className="user-loggedin">
                    {/* <div className="username"> */}
                      <h1>Welcome, Grace</h1>
                    {/* </div> */}
                  </div>
                  <ul>
                    <li>
                      <Link to="/" className="mobile-menu-btn">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/#" className="mobile-menu-btn">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/repairs/#" className="mobile-menu-btn">
                        Repairs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/make-appointment/first-contact/#"
                        className="mobile-menu-btn"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/make-appointment/first-contact/#"
                        className="mobile-menu-btn"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>

                  <div className="login-register1">
                    <button className="login-fill">
                      <Link className="login-fill-btn" to="/login#">
                        Login
                      </Link>
                    </button>
                    <button>
                      <Link className="login-normal-btn" to="/register#">
                        Register
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}
