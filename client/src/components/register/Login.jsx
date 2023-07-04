import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
// import {useHistory} from "react-router";
import axios from "axios";
import "./register.css";

export default function Register() {
  const redirect = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("error");
  const message = searchParams.get("message");

  console.log(query);

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
    // console.log(e);
    axios.post("/api/maestromarv/login", { loginForm }).then((res) => {
      if (res.status === 200) {
        console.log("data has been posted");
        redirect(-1);
      }
    });
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

  console.log(user);

  const handlePrevious = () => {
    // console.log("back is clicked")
    redirect(-1);
  };

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
                <form action="api/maestromarv/login" method="POST">
                  <div className="issue-details">
                    <h3>Welcome! Please login</h3>
                    <p>
                      Don't have an account?{" "}
                      <Link to="/register">register</Link>
                    </p>
                  </div>
                  <br />
                  {query ? (
                    <div className="error-messages">
                      <p>
                        {query === "not_exists"
                          ? "A User with this email does not exist"
                          : null}
                      </p>
                      <p>
                        {query === "wrong_password"
                          ? "The password does not match your email"
                          : null}
                      </p>
                      <p>
                        {query === "login-to-proceed-for-payment"
                          ? "Please Login to be able to purchase"
                          : null}
                      </p>
                      <p>
                        {query === "login-to-proceed-to-cart"
                          ? "Please Login to view your cart"
                          : null}
                      </p>
                    </div>
                  ) : null}
                  {message ? (
                    <div className="success">
                      <p>
                        {message === "registered"
                          ? "You have been registered, Please log in"
                          : null}
                      </p>
                    </div>
                  ) : null}

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
              ) : (
                <div>You are logged in</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
