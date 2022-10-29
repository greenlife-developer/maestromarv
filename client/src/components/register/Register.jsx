import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const redirect = useNavigate();

  const [regForm, setRegForm] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;

    setRegForm((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
          phone: prev.phone,
          password: prev.password,
        };
      }
      if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
          phone: prev.phone,
          password: prev.password,
        };
      }
      if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
          phone: prev.phone,
          password: prev.password,
        };
      }
      if (name === "phone") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: prev.email,
          phone: value,
          password: prev.password,
        };
      }
      if (name === "password") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: prev.email,
          phone: prev.phone,
          password: value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e);
    axios.post("/api/maestromarv/register", {regForm}).then((res) => {
      if(res.status === 200){
        console.log("data has been posted");
        redirect("/login?message=registered");
      }
    })
  };
  return (
    <div className="registration-form">
      <Link className="back" to="/">
        Back
      </Link>
      <div className="app-details">
        <div className="">
          <div className="details-form">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="issue-details">
                  <h3>Let's get you registered</h3>
                  <p>
                    Already have an account? <Link to="/login">login</Link>
                  </p>
                </div>
                <div className="issue-type">
                  <label htmlFor="type">First Name</label>
                  <input
                    name="fName"
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <br />
                <div className="issue-type">
                  <label htmlFor="type">Last Name</label>
                  <input
                    name="lName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <br />
                <div className="issue-type">
                  <label htmlFor="type">Email Address</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <br />
                <div className="issue-type">
                  <label htmlFor="type">Phone Number</label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    type="number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <br />
                <div className="issue-type">
                  <label htmlFor="type">Password</label>
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <br />
                <div className="issue-type">
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
