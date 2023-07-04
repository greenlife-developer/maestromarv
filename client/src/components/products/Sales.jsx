import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Table } from "antd";
import Item from "./Item";
import axios from "axios";
import "./sales.css";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone no.",
    dataIndex: "number",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};

const defaultFooter = () => "";

const Sales = (props) => {
  const bordered = true;
  let size = "large";
  let expandable = defaultExpandable;
  let showTitle = true;
  let showHeader = true;
  let showfooter = true;
  let tableLayout = undefined;
  let top = "none";
  let bottom = "bottomRight";
  let ellipsis = false;
  let yScroll = false;
  let xScroll = true;
  const [sales, setSales] = useState(null);
  const [orders, setOrders] = useState(null);
  const [message, setMessage] = useState("");

  const [percent, setPercent] = useState(0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  // TODO: DONE: let send messages, users receive the messages

  const defaultTitle = () => {
    if (props.name === "order-items") {
      return "View and monitor the state of your orders with us.";
    }
    if (props.name === "sales-items") {
      return "Recent and completed orders.";
    }
  };

  useEffect(() => {
    async function fetchData() {
      await axios.get("/api").then((data) => {
        if (data.data.isLogin === false) {
          setSales(null);
        }
        if (data.data.isLogin === true) {
          const result2 = data.data.sales.filter((std) => {
            return std.user.email === data.data.user.email;
          });
          setOrders(result2);
          setSales(data.data.sales);
        }
      });
    }
    fetchData();
  }, []);

  const handleProgress = (e, itemId) => {
    e.preventDefault();
    // console.log(itemId);
    axios
      .post(`/api/shop/edit/${itemId}`, { message: message, percent: percent })
      .then((res) => {
        setMessage("");
        if (res.status === 200) {
          console.log("data has been posted");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // setProgress(message);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = [];

  // Sales Items
  if (props.name === "sales-items") {
    if (sales && sales[0] && sales[0].item) {
      // date.padStart(2, "0") + " " + months[createdAt.getMonth()] + ", " +createdAt.getFullYear()
      sales.map((sales, index) => {
        const createdAt = new Date(sales.createdAt);
        const date = createdAt.getDate() + "";
        return data.push({
          key: index,
          name: sales.user.firstName + " " + sales.user.lastName,
          email: sales.user.email,
          number: sales.phone,
          address: sales.user.address,
          status: (
            <div className="progress-section">
              {/* {setItemId(sales.item[0]._id)} */}
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                percent={sales.percent}
              />
              <p>{sales.message}</p>
              {/* <p>{sales.item[0]._id}</p> */}
              <form onSubmit={(e) => handleProgress(e, sales._id)}>
                <input
                  placeholder="Enter a new message"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  name="progress"
                  id="progress"
                  required
                />
                <input
                  placeholder="% of progress e.g 10"
                  type="number"
                  onChange={(e) => setPercent(e.target.value)}
                  name="percent"
                  required
                />
                <button className="progress-bar">Submit</button>
              </form>
            </div>
          ),
          description: (
            <div className="product-description">
              <div className="product-description-container">
                <Item
                  sold={sales.item[0].sold}
                  name={sales.item[0].name}
                  id={sales.item[0]._id}
                  subprice={Number(sales.item[0].subprice)}
                  url={sales.item[0].img}
                  price={sales.item[0].price}
                  rating={sales.item[0].rating}
                  phone={sales.item[0].phone}
                  call={"call"}
                />
                <div className="user-cart-item">
                  <h3>Product Details</h3>
                  <div className="p-details">
                    <p>
                      Date of order:{" "}
                      {date.padStart(2, "0") +
                        " " +
                        months[createdAt.getMonth()] +
                        ", " +
                        createdAt.getFullYear()}
                    </p>
                    <p>Shipping Address: {sales.address}</p>
                    <p>Phone Number: {sales.phone}</p>
                    <p>Email: {sales.email}</p>
                    <p>Amoubt paid: {formatter.format(sales.item[0].price)}</p>
                  </div>
                </div>
              </div>
            </div>
          ),
        });
      });
    }
  }

  // Order Items
  if (props.name === "order-items") {
    if (orders && orders[0] && orders[0].item) {
      orders.map((orders, index) => {
        const createdAt = new Date(orders.createdAt);
        const date = createdAt.getDate() + "";
        return data.push({
          key: index,
          name: orders.user.firstName + " " + orders.user.lastName,
          email: orders.user.email,
          number: orders.phone,
          address: orders.address,
          status: (
            <div className="progress-section">
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                percent={orders.percent}
              />
              <p>{orders.message}</p>
            </div>
          ),
          description: (
            <div className="product-description">
              <div className="product-description-container">
                <Item
                  sold={orders.item[0].sold}
                  name={orders.item[0].name}
                  id={orders.item[0]._id}
                  subprice={Number(orders.item[0].subprice)}
                  url={orders.item[0].img}
                  price={orders.item[0].price}
                  rating={orders.item[0].rating}
                  phone={orders.item[0].phone}
                  call={"call"}
                />
                <div className="user-cart-item">
                  <h3>Product Details</h3>
                  <div className="p-details">
                    <p>
                      Date of order:{" "}
                      {date.padStart(2, "0") +
                        " " +
                        months[createdAt.getMonth()] +
                        ", " +
                        createdAt.getFullYear()}
                    </p>
                    <p>Shipping Address: {orders.address}</p>
                    <p>Phone Number: {orders.phone}</p>
                    <p>Email: {orders.email}</p>
                    <p>Amoubt paid: {formatter.format(orders.item[0].price)}</p>
                  </div>
                </div>
              </div>
            </div>
          ),
        });
      });
    }
  }

  const scroll = {};

  if (yScroll) {
    scroll.y = 240;
  }

  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

  const tableProps = {
    bordered,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    scroll,
    tableLayout,
  };
  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={data}
        scroll={scroll}
      />
    </>
  );
};

export default Sales;
