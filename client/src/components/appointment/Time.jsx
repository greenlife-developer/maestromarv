import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import "./appointment.css";

export default function Contact() {
  const redirect = useNavigate();
  let d = new Date();

  const [loading, setLoading] = useState(true)
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

  const details = localStorage.getItem("details");
  const contact = localStorage.getItem("contact");
  const newContact = JSON.parse(contact);
  const newDetails = JSON.parse(details);


  const handleBook = async(time) => {
    const appointment = { ...newDetails, ...newContact, time };
    await axios.post("/api/maestromarv/appointment", { appointment }).then((res) => {
      if(res.status === 200){
        notification.open({
          message: "Thank you for booking an appointment",
          description: "We will get back to you soon... :)",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
        redirect("/booked?message=booked")
      } else {
        notification.open({
          message: "Your appointment could not be booked at this time",
          description: "Please, try again...",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
      }
    });
  };

  useEffect(() => {
    // const appBtn = document.getElementById("appBtn");
    // appBtn.addEventListener("click", handleBook)
    setTimeout(() => {
      setLoading(false)
   }, 5000)
  });

  if(loading) {
    return (
      <div className="loader-container">
        <div class="loader"></div>
      </div>
    )
  }


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
                            {day.time.map((time, id2) => {
                              const schedule =
                                day.name +
                                " " +
                                d.toLocaleDateString() +
                                " " +
                                time;
                              return (
                                <button
                                  onClick={() => handleBook(schedule)}
                                  key={id2}
                                  id="appBtn"
                                  className="time-item"
                                >
                                  {time}
                                </button>
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
