import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Table } from "antd";
import Item from "./Item";
import axios from "axios";

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

const defaultTitle = () => "";

const defaultFooter = () => "";

const Orders = () => {
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
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    axios.get("/api").then((data) => {
      if (data.data.isLogin === false) {
        setOrders(null);
      }
      if (data.data.isLogin === true) {
        const result2 = data.data.sales.filter((std) => {
            return std.user.email === data.data.user.email;
          });
        setOrders(result2);
      }
    });
  }, []);

  const data = [];

  // console.log("This is the ahboard", booked);

  if (orders && orders[0] && orders[0].item) {
    orders.map((orders, index) => {
      return data.push({
        key: index,
        name: orders.user.firstName + " " + orders.user.lastName,
        email: orders.user.email,
        number: orders.phone,
        address: orders.user.address,
        status: "progress",
        description: (
          <div className="description">
            <div>
              <Item
                sold={orders.item[0].sold}
                name={orders.item[0].name}
                id={orders.item[0].id}
                subprice={Number(orders.item[0].subprice)}
                url={orders.item[0].img}
                price={orders.item[0].price}
                rating={orders.item[0].rating}
                phone={orders.item[0].phone}
                call={"call"}
              />
              <div className="user-cart-item"></div>
            </div>
          </div>
        ),
      });
    });
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

export default Orders;
