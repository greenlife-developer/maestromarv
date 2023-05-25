import React from "react";
import Navigation from "../homepage/Navigation";
import Footer from "../homepage/Footer";
import Faq from "./Faq";
import { Link } from "react-router-dom";

export default function FirstContact() {
  return (
    <div className="first-contact" id="topup">
      <Navigation />
      <div className="offices">
        <h1>To make an appointment, please choose a store: </h1>
      </div>
      <div className="appointment-office">
        <div className="map-office">
          <div className="office-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15829.498734442981!2d5.1327837999999915!3d7.31173710000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1684939203653!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ width: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="office-address">
            <h1>Futa office</h1>
            <h5>Suit 8,  </h5>
            <h6>
              <a href="tel:+2348142439130">08142439130</a>
            </h6>
            <br />
            <Link className="office-link" to="/make-appointment/">
              Proceed
            </Link>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          <div className="">
            <Faq />
          </div>
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
}
