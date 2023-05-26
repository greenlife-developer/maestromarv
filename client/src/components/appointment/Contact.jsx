import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./appointment.css";

export default function Contact() {
  const redirect = useNavigate();

  const [loading, setLoading] = useState(true)
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
          phone: prev.phone,
          address: prev.address,
        };
      }
      if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
          phone: prev.phone,
          address: prev.address,
        };
      }
      if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
          phone: prev.phone,
          address: prev.address,
        };
      }
      if (name === "phone") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: prev.email,
          phone: value,
          address: prev.address,
        };
      }
      if (name === "address") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: prev.email,
          phone: prev.phone,
          address: value,
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
    
    localStorage.setItem("contact", JSON.stringify(contact))
    redirect("/make-appointment/time");
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
            <Link to="/">Make an appointment</Link>
          </h4>
        </div>
        <div className="app-details">
          <div className="">
            <div className="details-form">
              <div className="form">
                <form action="" onSubmit={handleSubmit}>
                  <div className="issue-details">
                    <h3>Contact Information</h3>
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
                    <label htmlFor="type">Address</label>
                    <input
                      name="address"
                      onChange={handleChange}
                      type="text"
                      placeholder="Address"
                      required
                    />
                  </div>
                  <br />
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
