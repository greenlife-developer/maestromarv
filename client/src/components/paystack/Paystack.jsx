import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { SmileOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";
import "./paystack.css";

const Paystack = (props) => {
  const publicKey = "pk_live_168e390a89d88254907e5c7881c9710d193d3d5c";
  // pk_test_5e2bb4decdc516f19cab4e4bb07968f7350c1a05
  // pk_live_168e390a89d88254907e5c7881c9710d193d3d5c
  const amount = props.amount;
  const currency = "NGN";
  const item = props.item;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.split("/")[3];

  const formBody = {
    email,
    name,
    phone,
    address,
    item: item,
  };

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      name,
      phone,
    },
    onSuccess: () => {
      axios
        .post("/api/products/shop", { formBody })
        .then((res) => {
          notification.open({
            message: "Thank you for your purchase!",
            description: "Please, let's do business together in the future",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
          props.close();
          navigate(`/transactions?message=new-transaction&&item=${selected}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onClose: () => {
      notification.open({
        message: "Oh no!",
        description: "We hope to see your purchase",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pay = new PaystackPop();

    axios.get("/api").then((data) => {
      console.log(data);
      if (data.data.isLogin === true) {
        pay.newTransaction({
          key: publicKey,
          ...componentProps,
        });
      } else {
        navigate("/login?error=login-to-proceed-for-payment");
      }
    });
  };

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  return (
    <div className="App">
      <div className="container-cart-checkout">
        <div className="item">
          <div className="item-details">
            <h3>{truncate(props.name, 1)}</h3>
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
            <label>Address (Enter your shipping address)</label>
            <input
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
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
