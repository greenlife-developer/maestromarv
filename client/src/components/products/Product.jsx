import React, { useState } from "react";
import Navigation from "../homepage/Navigation";
import laptop from "../images/laptop.png";
import { Link } from "react-router-dom";
import phoneaccess from "../images/phoneaccess.jpg";
import laptopaccess from "../images/laptopaccess.jpg";
import accessories from "../images/accessories.jpg";
import { Modal } from "antd";
import "antd/dist/antd.min.css";
import "./products.css";
import products from "../../products";
import Footer from "../homepage/Footer";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import Paystack from "../paystack/Paystack";

export default function Product() {
  // const [previewVisible, setPreviewVisible] = useState(false);
  // const [previewImage, setPreviewImage] = useState("");

  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <>
      <div className="">
        <Navigation />
        <div
          id="demo"
          class="carousel slide carousel-container"
          data-ride="carousel"
        >
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={phoneaccess} alt="Los Angeles" width="100%" />
              <div className="content-carouel">
                <div className="">
                  <h1>Best and affordable electronic gadgets</h1>
                  <p>
                    Welcome to Maestromarv Tech solutions, thank you for
                    choosing us, we welcome you to our world.
                  </p>
                  <button>Start now</button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={laptopaccess} alt="Chicago" width="100%" />
            </div>
            <div class="carousel-item">
              <img src={accessories} alt="New York" width="100%" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>

        <div className="cart-container">
          <div className="cart" style={{ marginLeft: "100px" }}>
            <div className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="item-no">
              <span>25</span>
            </div>
          </div>
        </div>

        <div className="product-categories">
          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Laptops and Phones</h1>
              </div>
            </div>
            <div className="cat-body">
              {products.map((product, index) => {
                return (
                  <div key={index} className="cat-items-container">
                    <div className="cat-item">
                      <div className="cat-item-img">
                        <Link to={"/products/view/" + product.id}>
                          <img src={laptop} alt={product.name} />
                        </Link>
                      </div>
                      <div className="item-content">
                        <p>
                          <ResponsiveEllipsis
                            text={product.name}
                            maxLine="1"
                            ellipsis="..."
                            basedOn="letters"
                          />
                        </p>
                        <h4>{formatter.format(product.price)}</h4>
                        <span>your're saving 18%</span>
                        <br />
                        <span>
                          {product.sold} sold &#9733; {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>

        {/* <Modal
          visible={previewVisible}
          title={"previewTitle"}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal> */}
      </div>
    </>
  );
}
