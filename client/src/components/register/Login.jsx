import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const redirect = useNavigate()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm((prev) => {
      if (name === "email") {
        return {
          email: value,
          password: prev.password,
        };
      }
      if (name === "password") {
        return {
          email: prev.email,
          password: value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/maestromarv/login", { loginForm }).then((res) => {
      if(res.status === 200){
        console.log("Successfully registered!");
        redirect("/?message=logged-in");
      }
    });
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
                  <h3>Welcome! Please login</h3>
                  <p>
                    Don't have an account? <Link to="/register">register</Link>
                  </p>
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
                  <label htmlFor="type">Password</label>
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password Address"
                    required
                  />
                </div>
                <br />
                <div className="issue-type">
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
