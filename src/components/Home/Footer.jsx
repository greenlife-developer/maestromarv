import React from "react";

export default function Footer() {
  const year = new Date();
  return (
    <div>
      <div className="footer">
        <div className="footer-about">
          <img src="images/logo.png" alt="" />
          <em>Treating you to a smooth digital experience</em><br />
          <h6>
            Computer emergency? Need a Nerd right now, this minute? Great! Call
            us! We’re open 24/7/365 (yes, really). We can probably get to your
            front door in an hour. Call 516.606.3774, and choose the Emergency
            Service option At New York Nerds, we’ve supported businesses in the
            tri-state area for more than 20 years. And we’ve built up a lot of
            fans during that time — That’s why so many locals call us when they
            need help with their computer or network
          </h6>
        </div>
        <div className="footer-main-menu">
          <h4>Main menu</h4>
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
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Location</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer-apple-repair">
          <h4>Computer Repair</h4>
          <ul>
            <li>
              <a href="/">Laptop Repair</a>
            </li>
            <li>
              <a href="/">Liquid Damage Repair</a>
            </li>
            <li>
              <a href="/">Virus Malware Removal</a>
            </li>
            <li>
              <a href="/">Custom Build Computers</a>
            </li>
            <li>
              <a href="/">Windows Repair and Installation</a>
            </li>
          </ul>
        </div>
        <div className="footer-computer-repair">
          <h4>Home Automation</h4>
        </div>
        <div className="footer-it-support">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>09073628831
            </li>
            <li>
              <i className="fa-solid fa-earth-africa"></i>
              <a href="/">www.maestromarv.com</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="/">realmail@gmail.com</a>
            </li>
          </ul>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Maestromarv Tech Solution. All
          Rights Reserved | Delivery & Pick-Up Services | Computer Recycling
          Services All <br />
          trademarks displayed on this website are the property of the trademark
          owner. MaestroMarv does not claim any ownership or affiliation with the
          brands displayed.{" "}
        </p>
      </div>
    </div>
  );
}
