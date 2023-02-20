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
        console.log("data from api",data.data.cart);
        if (data.data.cart) {
          setCart(data.data.cart);
        }

        if (data.data.isLogin === true) {
          axios.post("/api/products/add-to-cart", { product })
          .then((res) => {
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

  useEffect(() => {
    const addCart = document.getElementById("addCart")
    addCart.addEventListener("click", handleAddToCart)
  })

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const decreaseProduct = (e) => {
    if (items === 1) {
      setItems(1);
    } else {
      setItems(items - 1);
    }
  };
  const increaseProduct = () => {
    setItems(items + 1);
  };

  const productName = <div style={{fontSize: "12px"}}>{product[0].name}</div>

  return ( 
    <>
      <Navigation />
      <div className="product-view">
        <div className="img-text">
          <div className="img">
            <div
              id="demo"
              className="carousel slide carousel-container"
              data-ride="carousel"
            >
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={laptop} alt="Los Angeles" width="100%" />
                </div>
                <div className="carousel-item">
                  <img src={laptop} alt="Chicago" width="100%" />
                </div>
                <div className="carousel-item">
                  <img src={laptop} alt="New York" width="100%" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon-custom"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon-custom"></span>
              </a>
            </div>
          </div>
          <div className="text">
            <div className="text-description">
              <div className="text-name">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium consectetur nostrum est molestias porro minima
                  temporibus quos saepe amet ducimus.
                </p>

                <div className="reviews">
                  <span>
                    <span className="stars">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </span>{" "}
                    4.8 | 200 sold | 18 reviews
                  </span>
                </div>
                <hr />

                <div className="product-price">
                  <h1>
                    {formatter.format(
                      parseInt(product[0].price) - parseInt(product[0].subprice)
                    )}
                  </h1>
                  <h4>{formatter.format(product[0].price)}</h4>
                  <span>
                    -{" "}
                    {Math.round(
                      (parseInt(product[0].subprice) * 100) /
                        parseInt(product[0].price)
                    )}
                    %
                  </span>
                </div>

                <Cart />

                <div className="specifications">
                  <div className="color">
                    <h6>color: {product[0].color}</h6>
                    <img
                      src={laptop}
                      style={{ border: `2px solid ${product[0].color}` }}
                      width="50px"
                      alt=""
                    />
                    <br />
                    <br />
                    <div className="quantity">
                      <h6>quantity: </h6>
                      <div className="">
                        <button
                          style={{
                            backgroundColor:
                              items === 1 ? "lightgrey" : "white",
                          }}
                          onClick={decreaseProduct}
                        >
                          -
                        </button>
                        <button className="items-count">{items}</button>
                        <button onClick={increaseProduct}>+</button>
                        <button className="available-pieces">
                          124 available pieces
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="total-checkout">
                  <div className="totals">
                    <h1>
                      Total:{" "}
                      {formatter.format(
                        (parseInt(product[0].price) -
                          parseInt(product[0].subprice)) *
                          items
                      )}
                    </h1>
                  </div>

                  <div className="actions">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPreviewVisible("open");
                      }}
                    >
                      Buy Now
                    </button>
                    <button id="addCart" onClick={handleAddToCart}>Add to Cart</button>
                  </div>
                  <Modal
                    open={previewVisible}
                    title={"previewTitle"}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <Paystack
                      amount={
                        (parseInt(product[0].price) -
                          parseInt(product[0].subprice)) *
                          items +
                        "00"
                      }
                      name={productName}
                      item={product}
                      close={handleRedirect}
                    />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tabs tabPosition={window.innerWidth <= 425 ? "top" : "top"}>
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
        </Tabs>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
