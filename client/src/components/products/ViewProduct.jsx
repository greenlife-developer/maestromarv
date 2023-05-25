import React, { useState, useEffect } from "react";
import Navigation from "../homepage/Navigation";
import { Modal } from "antd";
import axios from "axios";
import { SmileOutlined } from "@ant-design/icons";
import Footer from "../homepage/Footer";
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

  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("/api/new-product")
      // .then((res) => res.json())
      .then((data) => {
        console.log(data.data.products);
        if (data.data) {
          setProducts(data.data.products);
        }
      });
  }, []);

  const product = products ? products.filter((std) => {
    return std._id === selected;
  }) : null;

  const bestOnSale = products ?  products.filter((std) => {
    return std.category === product[0].category;
  }) : null;

  // const productImages = product[0].otherImages;

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

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

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

  const price = Number(product ? product[0].price * items : 0);

  const productName = <div style={{ fontSize: "12px" }}>{product ? product[0].name : ""}</div>;

  return (
    <>
      <Navigation />

      <div className="main-product">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            {/* {productImages.map((image, id) => {
              return (
                <div key={id} class="carousel-item active">
                  <div className="product-img">
                    <img src={image.img1} alt={product[0].name} />
                  </div>
                </div>
              );
            })} */}
            <div class="carousel-item active">
              <div className="product-img">
                <img src={ product? product[0].img : ""} alt="" />
              </div>
            </div>
            {/* <div class="carousel-item">
              <div className="product-img">
                <img src={product[0].otherImages[1].img1} alt="" />
              </div>
            </div> */}
            {/* <div class="carousel-item">
              <div className="product-img">
                <img src={product[0].otherImages[2].img1} alt="" />
              </div>
            </div> */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="name-quantity">
          <div className="name">
            <h1>{product ? product[0].name : ""}</h1>
            <h3>{formatter.format(price)}</h3>
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
                <p>{product ? product[0].description : ""}</p>
              </TabPane>
              <TabPane tab="Specification" key="2">
                <p>{product ? product[0].specification : ""}</p>
              </TabPane>
            </Tabs>
          </div>
          <br />
        </div>
      </div>

      <div className="best-on-sale">
        <div className="heading">
          <h1>Best on sale</h1>
        </div>
        <div className="flex-card-container">
          <div className="card-container">
            {bestOnSale
              ? bestOnSale.map((bestSale, id) => {
                  return (
                    <div key={id} className="best-sale-card">
                      <div className="sale-bg">
                        <img src={bestSale.img} alt="" />
                      </div>
                      <div className="sale-content">
                        <h1>{bestSale.name}</h1>
                        <h5>{formatter.format(bestSale.price)}</h5>
                        <button>
                          <Link className="best-salebtn" to="/products">
                            View More
                          </Link>
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <Modal
        title="Confirm and proceed to payment"
        style={{
          top: 20,
          padding: 20,
        }}
        open={previewVisible}
        onOk={() => setPreviewVisible(false)}
        onCancel={() => setPreviewVisible(false)}
      >
        <Paystack
          amount={
            (parseInt(product ? product[0].price : "") - parseInt(product ? product[0].subprice : "")) *
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
