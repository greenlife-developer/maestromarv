import React, { useRef, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { SmileOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { notification } from "antd";
import axios from "axios";
import "./paystack.css";

const Paystack = (props) => {
  const publicKey = "pk_test_ea2edc0186f8edb588fe762f89d73ef2c0fdeeef";
  const amount = props.amount;
  const item = props.item;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const payRef = useRef();
  const [phone, setPhone] = useState("");

  const formBody = {
    email,
    name,
    phone,
    item: item,
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    onSuccess: () => {
      axios.post("/api/products/shop", { formBody }).then((res) => {
        console.log(res);
        console.log(res.data);
      });
      props.close();
      notification.open({
        message: "Thank you for your purchase!",
        description: "Please, let's do business together in the future",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
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
    pay.newTransaction({
      key: publicKey,
      ...componentProps,
    });
    // console.log("Hello submit");
  };

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }
  // const short = props.name.replace(/(.{7})..+/, "$1&hellip;");
  const productTitle =
    props.name.length > 1 ? props.name.slice(0, 0) + "..." : "props.name";
  // const realTitle =

  return (
    <div className="App">
      <div className="container-cart-checkout">
        <div className="item">
          <div className="item-details">
            <h3>{productTitle}</h3>
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
