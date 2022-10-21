import React from "react";
import { Link } from "react-router-dom";
import "./appointment.css";

export default function Contact() {
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
                <div className="issue-type">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
