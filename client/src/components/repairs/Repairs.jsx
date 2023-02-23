import React from "react";
import Navigation from "../homepage/Navigation";
import Footer from "../homepage/Footer";
import { Link } from "react-router-dom";
import repairImage from "../images/image5.jpg";
import "./repairs.css";

export default function Repairs() {
  return (
    <>
      <Navigation />
      <div className="repairs-page">
        <div className="repair-page-banner">
          <div className="re-banner-content">
            <h1>#1 Laptop Repair Service in Akure</h1>
            <p>
              Is there anything more frustrating than a broken laptop? Never
              fear: <br /> MTS is here to help. <br /> We're thrilled to be
              Seattle's laptop repair and <br /> data recovery specialists.
            </p>
          </div>
        </div>

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
                src={repairImage}
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
