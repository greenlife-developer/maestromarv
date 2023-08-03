import React, {useState, useEffect} from "react";
import Navigation from "../homepage/Navigation";
import Footer from "../homepage/Footer";
import location1 from "../images/location1.jpg"
import location2 from "../images/location2.jpg"
import location3 from "../images/location3.jpg"
import Faq from "./Faq";
import { Link } from "react-router-dom";

export default function FirstContact() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
       setLoading(false)
    }, 5000)
  }, []);

  if(loading) {
    return (
      <div className="loader-container">
        <div class="loader"></div>
      </div>
    )
  }

  return (
    <div className="first-contact" id="topup">
      <Navigation />
      <div className="offices">
        <h1>To make an appointment, please choose a store: </h1>
      </div>

      <br /><br />
      <div className="maestromarv-locations">
        <h1>Get Directions to our location</h1>

        <div className="maestromarv-office">
          <div className="img">
            <img src={location1} alt="" />
          </div>
          <div className="img">
            <img src={location2} alt="" />
          </div>
          <div className="img">
            <img src={location3} alt="" />
          </div>
        </div>
      </div>

      <div className="appointment-office">
        <div className="map-office">
          <div className="office-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d989.3645697494309!2d5.1389932!3d7.3022984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047894a6a6454e7%3A0xe3400e8fa8b631a6!2sSenate%20Extension%2C%20Oduduwa%20Road%2C%20340110%2C%20Ipinsa%2C%20Ondo!5e0!3m2!1sen!2sng!4v1690276809971!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ width: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe><br /><br />
          </div>
          <div className="office-address">
            <h1>Futa office</h1>
            <h5>Suit GF 8, Futa shopping complex, beside GTBank, Obanla </h5>
            <h6>
              <a href="tel:+2348142439130">08142439130</a>
            </h6>
            <br />
            <Link className="office-link" to="/make-appointment/">
              Proceed
            </Link><br /><br />
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
