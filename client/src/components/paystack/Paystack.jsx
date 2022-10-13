import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Checkout from "./Checkout";
import "./paystack.css";

const Paystack = (props) => {
  const publicKey = "pk_test_ea2edc0186f8edb588fe762f89d73ef2c0fdeeef";
  const amount = props.amount;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      props.close();
    },
    onClose: () => alert("Wait! Don't leave :("),
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
          <form>
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

            <button>
              H
            </button>
          </form>
          <PaystackButton {...componentProps} />
          {/* <Checkout /> */}
        </div>
      </div>
    </div>
  );
};

export default Paystack;
