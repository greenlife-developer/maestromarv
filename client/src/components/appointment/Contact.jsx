import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./appointment.css";

export default function Contact() {
  const redirect = useNavigate();

  return (
    <>
      <div className="appointment-container">
        <div className="appointment-header">
          <h4>
            <Link to="/">Make an appointment</Link>
          </h4>
        </div>
        <div className="app-details">
          <div className="">
            <div className="details-form">
              <div className="form">
                <form action="">
                  <div className="issue-details">
                    <h3>Contact Information</h3>
                  </div>
                  <div className="issue-type">
                    <label htmlFor="type">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Phone Number</label>
                    <input
                      name="phone"
                      type="number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Address</label>
                    <input name="address" type="text" placeholder="Address" />
                  </div>
                  <br />
                  <div className="issue-type">
                    <button onClick={() => redirect("/make-appointment/time")} type="submit">Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
