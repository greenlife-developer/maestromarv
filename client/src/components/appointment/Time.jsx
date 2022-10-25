import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./appointment.css";

export default function Contact() {
  let d = new Date();
  const [days, setDays] = useState([
    {
      name: "Monday",
      no: 1,
      time: ["9am - 11am", "11am - 1pm", "1pm - 3pm", "3pm - 5pm", "5pm - 7pm"],
    },
    {
      name: "Tuesday",
      no: 2,
      time: ["9am - 11am", "11am - 1pm", "1pm - 3pm", "3pm - 5pm", "5pm - 7pm"],
    },
    {
      name: "Wednesday",
      no: 3,
      time: ["9am - 11am", "11am - 1pm", "1pm - 3pm", "3pm - 5pm", "5pm - 7pm"],
    },
    {
      name: "Thursday",
      no: 4,
      time: ["9am - 11am", "11am - 1pm", "1pm - 3pm", "3pm - 5pm", "5pm - 7pm"],
    },
    {
      name: "Friday",
      no: 5,
      time: ["9am - 11am", "11am - 1pm", "1pm - 3pm", "3pm - 5pm", "5pm - 7pm"],
    },
    {
      name: "Saturday",
      no: 6,
      time: ["9am - 11am", "11am - 1pm", "1pm - 3pm", "3pm - 5pm", "5pm - 7pm"],
    },
  ]);

  const handleBook = (time) => {
    const details = localStorage.getItem("details");
    const contact = localStorage.getItem("contact");
    const newContact = JSON.parse(contact);
    const newDetails = JSON.parse(details);
    // console.log(JSON.parse(contact))
    const appointment = { ...newDetails, ...newContact, time };
    axios.post("/api/maestromarv/make-appointment", { appointment }).then((res) => {
      console.log(res.data);
    });
    console.log(time);
  };

  // console.log(details, contact);

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
                            {day.time.map((time, id) => {
                              const schedule =
                                day.name +
                                " " +
                                d.toLocaleDateString() +
                                " " +
                                time;

                              return (
                                <div
                                  onClick={() => handleBook(schedule)}
                                  key={id}
                                  className="time-item"
                                >
                                  {time}
                                </div>
                              );
                            })}
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
