import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-items">
            <div className="footer-item">
              <div className="">
                <h1>GOEBITS</h1>
                <p>Seattle’s Most Trusted Computer Professionals</p>
              </div><br />
              <div className="">
                <h6>UNIVERSITY DISTRICT</h6>
                <p>4760 University Way NE Seattle, WA 98105</p>
                <p>206 525 2266</p>
              </div><br />
              <div className="">
                <h6>CAPITOL HILL</h6>
                <p>4760 University Way NE Seattle, WA 98105</p>
                <p>206 525 2266</p><br />
                <div className="social-icon">
                  <i style={{backgroundColor: "#3b5998"}} class="fab fa-facebook-f"></i>
                  <i style={{backgroundColor: "#00acee"}} class="fab fa-twitter"></i>
                  <i style={{backgroundColor: "#fbad50"}} class="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="footer-item">
              <h6>Main Menu</h6>
              <ul>
                <li>
                  <Link className="footer-link" to="/">Home</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Apple Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Computer Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Data Recovery</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Contact us</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">About Us</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Location</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Site Map</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h6>Apple Repair</h6>
              <ul>
                <li>
                  <Link className="footer-link" to="/">MacBook Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">MacBook Air Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">MacBook Pro Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">iMac Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Mac Mini Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Mac Pro Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">iPhone Repair</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h6>Computer Repair</h6>
              <ul>
                <li>
                  <Link className="footer-link" to="/">Laptop Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Liquid Damage Repair</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Virus Malware Removal</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Custom Build Computers</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Windows Repair and Installation</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h6>IT Support</h6>
              <ul>
                <li>
                  <Link className="footer-link" to="/">Business Technical Service</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Business Computer Networking</Link>
                </li>
              </ul>
              <br /><br />

              <div className="footer-item">
              <h6>IT Support</h6>
              <ul>
                <li>
                  <Link className="footer-link" to="/">Business Technical Service</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">Business Computer Networking</Link>
                </li>
              </ul>
            </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
