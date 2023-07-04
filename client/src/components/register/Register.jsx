import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const redirect = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("error");
  const message = searchParams.get("message");

  // message=exists
  // message=registered

  const [user, setUser] = useState(false);

  

  const handlePrevious = () => {
    // console.log("back is clicked")
    redirect(-1);
  };

  useEffect(() => {
    async function fetchData() {
      await axios.get("/api").then((data) => {
        if (data.data.isLogin === false) {
          setUser(false);
        }
        if (data.data.isLogin === true) {
          setUser(data.data.isLogin);
        }
      });
    }

    fetchData();
  }, []);

  return (
    <div className="registration-form">
      <a onClick={handlePrevious} className="back">
        Back
      </a>
      <div className="app-details">
        <div className="">
          <div className="details-form">
            <div className="form">
              {!user ? (
                <form method="POST" action="api/maestromarv/register">
                  <div className="issue-details">
                    <h3>Let's get you registered</h3>
                    <p>
                      Already have an account? <Link to="/login">login</Link>
                    </p>
                  </div>
                  <br />
                  {query ? (
                    <div className="error-messages">
                      <p style={{margin: "0px"}}>
                        {query === "exists"
                          ? "A User with this email already exists"
                          : null}
                      </p>
                    </div>
                  ) : null}

                  <div className="issue-type">
                    <label htmlFor="type">First Name</label>
                    <input
                      name="fName"
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
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Home Address</label>
                    <input
                      name="address"
                      type="text"
                      placeholder="Home Address"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Phone Number</label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Password</label>
                    <input
                      name="password"
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
              ) : (
                "You are logged in"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
