import React from "react";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-items">
          <div className="mts-logo">
            <img src={logo} alt="MTS logo" />
            <h6>Treating you to a smooth digital experience</h6>
          </div>
          <div className="abt-mts">
            <p>
              Computer emergency? Need a Nerd right now, this minute? Great!
              Call us! We're open 24/7/365 (yes, really). We can probably get to
              your front door in an hour. Call 516.606.3774, and choose the
              Emergency Service option At New York Nerds, we've supported
              businesses in the tri-state area for more than 20 years. And we've
              built up a lot of fans during that time — That's why so many
              locals call us when they need help with their computer or network
            </p>
          </div>
        </div>
        <div className="footer-items">
          <div className="footer-main-menu">
            <h6>Main Menu</h6>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Repairs</a>
              </li>
              <li>
                <a href="">Home Automation</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-items">
          <div className="home-automation">
            <h6>Home Automation</h6>
          </div>
        </div>
        <div className="footer-items">
          <div className="footer-contact">
            <h6>Contact Us</h6>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i> 
                <span>09073628831</span>
              </li>
              <li>
                <i className="fa-solid fa-earth-americas"></i>{" "}
                <span>www.maestromarv.com</span>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>{" "}
                <span>realmail@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mts-copy">
          <p>
            &copy; 2022 Maestromarv Tech Solution. All Rights Reserved |
            Delivery & Pick-Up Services | Computer Recycling Services All
            trademarks displayed on this website are the property of the
            trademark owner. MaestroMarv does not claim any ownership or
            affiliation with the brands displayed.
          </p>
        </div>
    </footer>
  );
}
