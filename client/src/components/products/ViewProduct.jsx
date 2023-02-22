import React, { useState, useEffect } from "react";
import products from "../../products";
import Navigation from "../homepage/Navigation";
import laptop from "../images/laptop.png";
import { Modal } from "antd";
import axios from "axios";
import { SmileOutlined } from "@ant-design/icons";
import Footer from "../homepage/Footer";
import "antd/dist/antd.min.css";
import { Tabs, Button, notification } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Paystack from "../paystack/Paystack";
import "./pview.css";
import Cart from "./Cart";

const { TabPane } = Tabs;

export default function ViewProduct() {
  const location = useLocation();
  const [items, setItems] = useState(1);
  const [cart, setCart] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const redirect = useNavigate();

  const selected = location.pathname.split("/")[3];

  const product = products.filter((std) => {
    return std.id === selected;
  });

  const handleCancel = () => setPreviewVisible(false);

  const handleRedirect = () => {
    return redirect("/?message=bought");
  };

  const handleAddToCart = () => {
    if (product) {
      axios.get("/api").then((data) => {
        console.log("data from api", data.data.cart);
        if (data.data.cart) {
          setCart(data.data.cart);
        }

        if (data.data.isLogin === true) {
          axios.post("/api/products/add-to-cart", { product }).then((res) => {
            console.log(res);
            notification.open({
              message: "Added to Cart!",
              description: "Please, don't forget to check out",
              icon: <SmileOutlined style={{ color: "#108ee9" }} />,
            });
          });
        } else {
          notification.open({
            message: "Oops!!",
            description: "We could not add to cart, please login",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
          redirect("/login?message=cannot_add_cart");
        }
      });
    }
  };

  // useEffect(() => {
  //   const addCart = document.getElementById("addCart")
  //   addCart.addEventListener("click", handleAddToCart)
  // })

  // const formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "NGN",
  // });

  const handleDecreament = (e) => {
    if (items === 1) {
      setItems(1);
    } else {
      setItems(items - 1);
    }
  };
  const handleIncreament = () => {
    setItems(items + 1);
  };

  const productName = <div style={{ fontSize: "12px" }}>{product[0].name}</div>;

  return (
    <>
      <Navigation />

      <div className="main-product">
        <div className="product-img">
          <img src={laptop} alt="" />
        </div>

        <div className="name-quantity">
          <div className="name">
            <h1>Lenovo Fold 2019</h1>
            <h3>N300,401</h3>
          </div>
          <br />

          <div className="quantity">
            <h4>Quantity</h4>
            <span onClick={handleDecreament}>-</span>
            <span>{items}</span>
            <span onClick={handleIncreament}>+</span>
          </div>

          <div className="action-cart-buttons">
            <button className="cart-fill" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className="cart-normal"
              onClick={() => setPreviewVisible(true)}
            >
              Buy Now
            </button>
          </div>

          <div className="">
            <Tabs tabPosition={window.innerWidth <= 425 ? "top" : "top"}>
              <TabPane tab="Description" key="1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, velit!
                </p>
              </TabPane>
              <TabPane tab="Specification" key="2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, velit!
                </p>
              </TabPane>
            </Tabs>
          </div>
          <br />
          <br />

          <div className="best-on-sale">
            <div className="heading">
              <h1>Best on sale</h1>
            </div>
            <div className="card-container">
              <div className="best-sale-card">
                <div className="sale-bg">
                  <img src={laptop} alt="" />
                </div>
                <div className="sale-content">
                  <h1>Lenovo Fold 2019</h1>
                  <h5>N300,540</h5>
                  <button>View More</button>
                </div>
              </div>
              <div className="best-sale-card">
                <div className="sale-bg">
                  <img src={laptop} alt="" />
                </div>
                <div className="sale-content">
                  <h1>Lenovo Fold 2019</h1>
                  <h5>N300,540</h5>
                  <button>View More</button>
                </div>
              </div>
              <div className="best-sale-card">
                <div className="sale-bg">
                  <img src={laptop} alt="" />
                </div>
                <div className="sale-content">
                  <h1>Lenovo Fold 2019</h1>
                  <h5>N300,540</h5>
                  <button>View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Confirm and proceed to payment"
        style={{
          top: 20,
        }}
        open={previewVisible}
        // onOk={() => setPreviewVisible(false)}
        // onCancel={() => setPreviewVisible(false)}
      >
        <Paystack
          amount={
            (parseInt(product[0].price) - parseInt(product[0].subprice)) *
              items +
            "00"
          }
          name={productName}
          item={product}
          close={handleRedirect}
        />
      </Modal>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

{
  /* <Tabs tabPosition={window.innerWidth <= 425 ? "top" : "top"}>
          <TabPane tab="SPECIFICATIONS" key="1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              velit!
            </p>
          </TabPane>
          <TabPane tab="DESCRIPTION" key="2">
            <p>Lorem ipsum dolor sit amet.</p>
          </TabPane>
          <TabPane tab="MORE" key="3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              totam voluptas, placeat ullam temporibus corrupti.
            </p>
          </TabPane>
        </Tabs> */
}
