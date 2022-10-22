import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./appointment.css";

export default function Contact() {
  const [days, setDays] = useState([
    { name: "Monday", no: 1 },
    { name: "Tuesday", no: 2 },
    { name: "Wednesday", no: 3 },
    { name: "Thursday", no: 4 },
    { name: "Friday", no: 5 },
    { name: "Saturday", no: 6 },
  ]);

  let d = new Date();

  return (
    <>
      <div className="appointment-container time-container">
        <div className="appointment-header">
          <h4>
            <Link to="/">Make an appointment</Link>
          </h4>
        </div>
        <div className="app-details">
          <div className="">
            <div className="details-form">
              <div className="form">
                <div className="appointment-time">
                  {days.map((day, id) => {
                    d.setDate(d.getDate() + ((day.no + 7 - d.getDay()) % 7));
                    return (
                      <>
                        <div key={id} className="time-day">
                          <h1>
                            {day.name} ({d.toLocaleDateString()})
                          </h1>
                          <div className="time">
                            <div className="time-item">9am - 11am</div>
                            <div className="time-item">11am - 1pm</div>
                            <div className="time-item">1pm - 3pm</div>
                            <div className="time-item">3pm - 5pm</div>
                            <div className="time-item">5pm - 7pm</div>
                          </div>
                        </div>
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
