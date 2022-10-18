import React, { useRef, useState } from "react";
// import { PaystackButton } from "react-paystack";
import PaystackPop from "@paystack/inline-js";
// import Checkout from "./Checkout";
import axios from "axios";
import "./paystack.css";

const Paystack = (props) => {
  const publicKey = "pk_test_ea2edc0186f8edb588fe762f89d73ef2c0fdeeef";
  const amount = props.amount;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const payRef = useRef();
  const [phone, setPhone] = useState("");

  const formBody = {
    email,
    name,
    phone,
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    onSuccess: () => {
      axios
        .post(
          "/api/products/shop",
          { formBody },
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
      props.close();
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pay = new PaystackPop();
    pay.newTransaction({
      key: publicKey,
      ...componentProps,
    });
    console.log("Hello submit");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="item-details">
            <h3>{props.name}</h3>
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Paystack;
