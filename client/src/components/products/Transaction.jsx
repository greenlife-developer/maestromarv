import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../homepage/Navigation";
import Sales from "./Sales";
// import CartItems from "./CartItems";
import { Tabs } from "antd";
import Item from "./Item";
// import Orders from "./Orders";
import "./transaction.css";
import { useSearchParams, Link } from "react-router-dom";

export default function Transaction() {
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const message = searchParams.get("message");
  const item = searchParams.get("item");

  console.log(item, " ... ", message);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  useEffect(() => {
    async function fetchData() {
      await axios.get("/api").then((data) => {
        if (data.data.isLogin === false) {
          setCart(null);
        }
        if (data.data.isLogin === true) {
          const result = data.data.cart.filter((std) => {
            return std.user.email === data.data.user.email;
          });
          setUser(data.data.user);
          setCart(result);
        }
        if (
          data.data.user.email === "yemijoshua81@gmail.com" ||
          data.data.user.email === "maestromarve@gmail.com"
        ) {
          setAdmin(false);
        }
      });
    }

    fetchData();
  }, []);

  const items = [
    {
      key: "1",
      label: `Manage Your Sales (Admin only)`,
      children: (
        <div>
          <div className="cart-details">
            <div className="cart-items">
              <Sales name="sales-items" />
            </div>
          </div>
        </div>
      ),
      disabled: admin,
    },
    {
      key: "2",
      label: `View Your Cart`,
      children: (
        <div className="transaction-cart">
          {cart
            ? cart.map((cart, index) => {
                console.log(cart);
                return (
                  <div className="parent-transaction">
                    <div key={index} className="transaction-cart-items">
                      <div className="item">
                        <Item
                          // sold={cart[0].sold}
                          name={cart[0].name}
                          id={cart[0]._id}
                          subprice={Number(cart[0].subprice)}
                          url={cart[0].img}
                          price={cart[0].price}
                        />
                      </div>
                      <div className="other-details">
                        <div className="item">
                          <p>Quantity</p>
                          <p>{cart.items}</p>
                        </div>
                        <div className="item">
                          <p>Price</p>
                          <p>{formatter.format(cart[0].price)}</p>
                        </div>
                        <div className="item">
                          <p>Total</p>
                          <p>{Number(cart.items * cart[0].price)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="transaction-buy">
                      <a href={"/products/view/" + cart[0]._id}>Buy Now</a>
                    </div>
                    <hr />
                  </div>
                );
              })
            : "There is nothing in the cart"}
        </div>
      ),
    },
    {
      key: "3",
      label: `View your orders`,
      children: (
        <div className="cart-details">
          <div className="cart-items">
            <Sales name="order-items" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navigation />
      <div className="transactions">
        <div className="transaction-header">
          <h1>{message ? "Thank you for your Purchase!!!" : null}</h1>
          <h4>View Your Transactions</h4>
          <p>
            {user ? user.email + ", Track your orders and cart here." : null}
          </p>
        </div>
        <div className="transaction-body">
          <div className="tabs-container">
            <Tabs defaultActiveKey="2" type="card" items={items} />
          </div>
        </div>
      </div>
    </>
  );
}
