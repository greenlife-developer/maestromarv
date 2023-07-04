import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Item from "../products/Item";
import "./navstyle.css";
import logo from "../images/logo.png";

export default function Navigation() {
  const redirect = useNavigate();
  const [cart, setCart] = useState(null);
  const [sales, setSales] = useState(null);
  const [cartno, setCartno] = useState("0");
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);

  const handleLogOut = () => {
    axios.get("/api/logout").then((res) => {
      redirect("/?message=logged_out");
    });
  };

  const handleMenu = () => {
    setChangeIcon(!changeIcon);
  };

  useEffect(() => {
    axios.get("/api").then((data) => {
      if (data.data.isLogin === false) {
        setCart(null);
        setCartno(null);
        setSales(null);
      }
      if (data.data.isLogin === true) {
        const result = data.data.cart.filter((std) => {
          return std.user.email === data.data.user.email;
        });
        setLogin(true);
        setUser(data.data.user);
        setCart(result);
        setCartno(result.length);
        setSales(data.data.sales);
      }
    });
  });

  return (
    <>
      <header
        style={{
          background: "#EBF1FF",
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
                  <NavLink className="nav-link" to="/#topup">
                    Home
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/repairs#topup">
                    Repairs
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink className="nav-link" to="/products#topup">
                    Products
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    className="nav-link"
                    to="/make-appointment/first-contact/#topup"
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
                        <a href="/#aboutUs">About us</a>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/make-appointment/first-contact/">
                          Location
                        </Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="/make-appointment/first-contact/">FAQ</Link>
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
              <div className="">
                <div
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  className="cart-icon"
                >
                  <Link
                    to={
                      user
                        ? "/transactions"
                        : "/login?error=login-to-proceed-to-cart"
                    }
                  >
                    <i className="ri-shopping-cart-2-line"></i>
                    <div className="cart-no">
                      <p>{cartno}</p>
                    </div>
                  </Link>
                </div>
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
                <div className="mobile-nav-body">
                  {login ? (
                    <div className="user-loggedin-mobile">
                      <h3>Welcome, {user ? user.firstName : null}</h3>
                    </div>
                  ) : null}
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

                  {!login ? (
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
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div>
        <div className="offcanvas-header"></div>
      </div>
    </>
  );
}
