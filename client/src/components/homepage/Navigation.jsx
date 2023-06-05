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
                  <i className="ri-shopping-cart-2-line"></i>
                  <div className="cart-no">
                    <p>{cartno}</p>
                  </div>
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
                <div className="">
                  {login ? (
                    <div className="user-loggedin-mobile">
                      <h1>Welcome, {user ? user.firstName : null}</h1>
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

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Orders Details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="order-page">
            <div className="cart-details">
              <h4>View Your Cart({cartno})</h4>
              <div className="cart-items">
                {cart
                  ? cart.map((cat, id) => {
                      return (
                        <Item
                          key={id}
                          sold={cat[0].sold}
                          name={cat[0].name}
                          id={cat[0].id}
                          price={cat[0].price}
                          rating={cat[0].rating}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
            <br />
            <br />

            <div className="cart-details">
              <h4>View Your Orders</h4>
              <div className="cart-items">
                {sales && sales[0] && sales[0].item
                  ? sales.map((sale, id) => {
                      return (
                        <Item
                          key={id}
                          sold={sale.item[0].sold}
                          name={sale.item[0].name}
                          id={sale.item[0].id}
                          price={sale.item[0].price}
                          rating={sale.item[0].rating}
                          phone={sale.item[0].phone}
                          call={"call"}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
