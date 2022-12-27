import React from "react";
import Navigation from "../homepage/Navigation";
import Footer from "../homepage/Footer";
import Faq from "./Faq";
import { Link } from "react-router-dom";

export default function FirstContact() {
  return (
    <div className="first-contact">
      <Navigation />
      <div className="offices">
        <h1>To make an appointment, please choose a store: </h1>
      </div>
      <div className="appointment-office">
        <div className="map-office">
          <div className="office-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.393931430692!2d5.137128414269087!3d7.309564915554844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047894c344e7a61%3A0xd4ef39e2d5221bee!2sMFMCF%20FUTA!5e0!3m2!1sen!2sng!4v1670249261027!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="office-address">
            <Link to="/make-appointment/">
              <h1>Futa office</h1>
              <h5>Futa North gate, Akure</h5>
              <h6>
                <a href="tel:+2348065109764">08065109764</a>
              </h6>
            </Link>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="faq-container">
          <h1>Frequesntly Asked Questions</h1>
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
