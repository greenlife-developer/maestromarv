import React, {useState, useEffect} from "react";
import Navigation from "../homepage/Navigation";
import Footer from "../homepage/Footer";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import repairImage from "../images/laptop-repair.jpg";
import repairImage2 from "../images/phone-repair.jpg";
import repair1 from "../images/repair1.jpg";
import repair2 from "../images/repair2.jpg";
import repair3 from "../images/repair3.jpg";
import repair4 from "../images/repair4.jpg";
import repair5 from "../images/repair5.jpg";
import "./repairs.css";

export default function Repairs() {

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
    <>
      <Navigation />
      <div id="topup" className="repairs-page">
        <Carousel effect="fade" autoplay>
          <div>
            <div className="repair-banner">
              <img src={repair1} alt="" />
              <div className="repair-page-banner">
                <div className="re-banner-content">
                  <h1>#1 Repair Services in Akure</h1>
                  <p>
                    Is there anything more frustrating than a broken laptop?
                    Never fear: <br /> MTS is here to help. <br /> We're
                    thrilled to be Seattle's laptop repair and <br /> data
                    recovery specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="repair-banner">
              <img src={repair2} alt="" />
              <div className="repair-page-banner">
                <div className="re-banner-content">
                  <h1>#1 Repair Services in Akure</h1>
                  <p>
                    Is there anything more frustrating than a broken laptop?
                    Never fear: <br /> MTS is here to help. <br /> We're
                    thrilled to be Seattle's laptop repair and <br /> data
                    recovery specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="repair-banner">
              <img src={repair3} alt="" />
              <div className="repair-page-banner">
                <div className="re-banner-content">
                  <h1>#1 Repair Services in Akure</h1>
                  <p>
                    Is there anything more frustrating than a broken laptop?
                    Never fear: <br /> MTS is here to help. <br /> We're
                    thrilled to be Seattle's laptop repair and <br /> data
                    recovery specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="repair-banner">
              <img src={repair4} alt="" />
              <div className="repair-page-banner">
                <div className="re-banner-content">
                  <h1>#1 Repair Services in Akure</h1>
                  <p>
                    Is there anything more frustrating than a broken laptop?
                    Never fear: <br /> MTS is here to help. <br /> We're
                    thrilled to be Seattle's laptop repair and <br /> data
                    recovery specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="repair-banner">
              <img src={repair5} alt="" />
              <div className="repair-page-banner">
                <div className="re-banner-content">
                  <h1>#1 Repair Services in Akure</h1>
                  <p>
                    Is there anything more frustrating than a broken laptop?
                    Never fear: <br /> MTS is here to help. <br /> We're
                    thrilled to be Seattle's laptop repair and <br /> data
                    recovery specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="laptop-services">
          <div className="services-items">
            <div className="service-item">
              <img
                src={repairImage}
                alt="repair image"
                width="100%"
                height="100%"
              />
            </div>
            <div className="service-item item2">
              <h1>Laptop Repair Services MTS</h1>
              <ul>
                <li>HD & SSD Replacement</li>
                <li>Screen Repair & Replacement</li>
                <li>Motherboard Repair & Replacement</li>
                <li>Liquid Damage Repair</li>
                <li>Virus & Malware Removal</li>
                <li>Ram Upgrade and Install</li>
                <li>Battery Replacement</li>
                <li>Data Recovery</li>
                <li>Keyboard and Touchpad Replacement</li>
                <li>OS (Windows, OS X, Linux) Repair & Reinstallation</li>
                <li>And much, much more!</li>
              </ul>
              <p>
                As an Apple Authorized Service Provider, we’re happy to service
                Apple Macbooks, even those with third-party parts, as well as PC
                laptops.
              </p>
              <Link
                className="appointment"
                to="/make-appointment/first-contact/"
              >
                Make Appointment
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="laptop-services">
          <div className="services-items">
            <div className="service-item">
              <img
                src={repairImage2}
                alt="repair image"
                width="100%"
                height="100%"
              />
            </div>
            <div className="service-item item2">
              <h1>Phone Repair Services MTS</h1>
              <ul>
                <li>HD & SSD Replacement</li>
                <li>Screen Repair & Replacement</li>
                <li>Motherboard Repair & Replacement</li>
                <li>Liquid Damage Repair</li>
                <li>Virus & Malware Removal</li>
                <li>Ram Upgrade and Install</li>
                <li>Battery Replacement</li>
                <li>Data Recovery</li>
                <li>Keyboard and Touchpad Replacement</li>
                <li>OS (Windows, OS X, Linux) Repair & Reinstallation</li>
                <li>And much, much more!</li>
              </ul>
              <p>
                As an Apple Authorized Service Provider, we’re happy to service
                Apple Macbooks, even those with third-party parts, as well as PC
                laptops.
              </p>
              <Link
                className="appointment"
                to="/make-appointment/first-contact/"
              >
                Make Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="data-recovery">
        <div className="data">
          <div className="data-item">
            <h1>Data Recovery</h1>
            <h2>
              Seattle Data & Hard Drive Recovery for Computers and Laptops
            </h2>
            <p className="team">
              Our team will help you recover the critical data that others can’t
              reach!
            </p>
            <p>
              Our Apple Certified Technicians have the knowledge and experience
              to recover data from a wide range of any failed mass storage
              device – hard drives, SSD drives, USB flash drives (thumb drives),
              compact flash cards, SD cards, and others. When all other attempts
              to recover your data in-house have been exhausted, we can
              recommend additional recovery options with DriveSavers. They are
              an external partner and align nicely with our core values of
              honesty and integrity.
            </p>
            <Link className="appointment" to="/make-appointment/first-contact/">
              Make Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
