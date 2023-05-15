import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-item-logo">
            <div className="footer-logo">
              <div className="logos">
                <img src={logo} alt="logo" />
              </div>
              <div className="social-medias">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <hr />
          </div>

          
          <div className="footer-items-container">
            <div className="footer-items">
              <div className="footer-item">
                <h1>MaestroMarv</h1>
                <ul>
                  <li>
                    <Link className="footer-link" to="/">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-item">
                <h1>IT Support</h1>
                <ul>
                  <li>
                    <Link className="footer-link" to="/">
                      Business Technical Service
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Business Computer Networking
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Data Recovery
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-item">
                <h1>Apple Repair</h1>
                <ul>
                  <li>
                    <Link className="footer-link" to="/">
                      iPhone
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      MacBook
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      MacBook Air
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      MacBook Pro
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      iMac
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Mac Air
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Mac Pro
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-item computer-footer-repair">
                <h1>Computer Repair</h1>
                <ul>
                  <li>
                    <Link className="footer-link" to="/">
                      Liquid Damage
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Virus Malware Removal
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Custom Buld Computers
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="/">
                      Windows Installation
                    </Link>
                  </li>
                </ul>
                <br />
                <br />

                <div className="footer-item">
                  <h1>Offices</h1>
                  <ul>
                    <li>
                      <Link className="footer-link" to="/">
                        Futa NorthGate
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
