import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./appointment.css";

export default function Appointment() {
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    redirect("/make-appointment/contact");
  };

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
                <form action="" onSubmit={handleSubmit}>
                  <div className="issue-details">
                    <h3>Issue Details</h3>
                  </div>
                  <div className="issue-type">
                    <label htmlFor="type">Priority</label>
                    <br />
                    <select name="type" id="" required>
                      <option value=""></option>
                      <option value="approved">High</option>
                      <option value="completed">Medium</option>
                      <option value="completed">Low</option>
                    </select>
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Issue Type</label>
                    <br />
                    <select name="type" id="" required>
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
                      type="text"
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
