import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./appointment.css";

export default function Appointment() {
  const redirect = useNavigate();
  const [details, setDetails] = useState({
    priority: "",
    type: "",
    subject: "",
    details: "",
  });

  const [loading, setLoading] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      if (name === "priority") {
        return {
          priority: value,
          type: prev.type,
          subject: prev.subject,
          details: prev.details,
        };
      }
      if (name === "type") {
        return {
          priority: prev.priority,
          type: value,
          subject: prev.subject,
          details: prev.details,
        };
      }
      if (name === "subject") {
        return {
          priority: prev.priority,
          type: prev.type,
          subject: value,
          details: prev.details,
        };
      }
      if (name === "details") {
        return {
          priority: prev.priority,
          type: prev.type,
          subject: prev.subject,
          details: value,
        };
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
       setLoading(false)
    }, 5000)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("details", JSON.stringify(details));
    redirect("/make-appointment/contact");
  };

  if(loading) {
    return (
      <div className="loader-container">
        <div class="loader"></div>
      </div>
    )
  }

  return (
    <>
      <div className="appointment-container">
        <div className="appointment-header">
          <h4>
            <Link className="home-appointment" to="/">Make an appointment</Link>
          </h4>
        </div>
        <div className="app-details">
          <div className="">
            <div className="details-form">
              <div className="form">
                <form action="" onSubmit={handleSubmit}>
                  <div className="issue-details">
                    <h3>Issue Details</h3>
                  </div>
                  <div className="issue-type">
                    <label htmlFor="type">Priority</label>
                    <br />
                    <select
                      onChange={handleChange}
                      name="priority"
                      id=""
                      required
                    >
                      <option value=""></option>
                      <option value="urgent">Urgent</option>
                      <option value="very_urgent">Very urgent</option>
                      <option value="not_urgent">Not urgent</option>
                    </select>
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Issue Type</label>
                    <br />
                    <select onChange={handleChange} name="type" id="" required>
                      <option value=""></option>
                      <option value="new">New</option>
                      <option value="diagnosed">Diagnosed</option>
                      <option value="approved">Work Approved</option>
                      <option value="completed">Work Completed</option>
                    </select>
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Issue Subject</label>
                    <br />
                    <input
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      placeholder="Need help with..."
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Issue Details</label>
                    <br />
                    <textarea
                      name="details"
                      onChange={handleChange}
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Detailed explanation of the issue"
                      required
                    ></textarea>
                  </div>
                  <div className="issue-type">
                    <button type="submit">Next</button>
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
