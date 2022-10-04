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
            <h4>Main Menu</h4>
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
            <h4>Home Automation</h4>
          </div>
        </div>
        <div className="footer-items">
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <i class="fa-solid fa-phone"></i> 
                <span>09073628831</span>
              </li>
              <li>
                <i class="fa-solid fa-earth-americas"></i>{" "}
                <span>www.maestromarv.com</span>
              </li>
              <li>
                <i class="fa-regular fa-envelope"></i>{" "}
                <span>realmail@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
