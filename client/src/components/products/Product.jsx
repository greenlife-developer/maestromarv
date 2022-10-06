import React, { useState } from "react";
import Navigation from "../homepage/Navigation";
import bannerimage from "../images/products.jpg";
import laptop from "../images/laptop.png";
import { Modal } from "antd";
import "antd/dist/antd.min.css";
import "./products.css";
import products from "../../products";
import Footer from "../homepage/Footer";
import Paystack from "../paystack/Paystack";

export default function Product() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleCancel = () => setPreviewVisible(false);

  return (
    <>
      <div className="">
        <Navigation />
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
        <div className="products-container">
          <div className="product">
            <div className="product-banner-image">
              <img src={bannerimage} alt="banner image" />
            </div>
            <div className="product-banner-text">
              <h1>Best and affordable electronic gadgets</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam consectetur vel dolorem corporis cup.
              </p>
              <button className="btn btn-primary">Shop now</button>
              <div className="sales-history">
                <div className="history-item">
                  <h5>120+</h5>
                  <span>Total clients</span>
                </div>
                <div className="history-item">
                  <h5>134+</h5>
                  <span>Total Sales</span>
                </div>
                <div className="history-item">
                  <h5>1000+</h5>
                  <span>Total repairs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-categories">
          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h4>Laptops and Phones</h4>
              </div>
              <div className="cat-head-1">
                <a href="#">See more</a>
              </div>
            </div>
            <div className="cat-body">
              {products.map((product, index) => {
                return (
                  <div key={index} className="cat-item">
                    <div className="cat-item-img">
                      <img
                        onClick={(e) => {
                          e.preventDefault();
                          setPreviewVisible(true);
                          setPreviewImage(laptop);
                        }}
                        src={laptop}
                        alt=""
                      />
                    </div>
                    <div className="item-content">
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <h5>
                        <span>NGN</span>
                        {product.price}
                        <span>.34</span>
                      </h5>
                      <div className="buys">
                        <span>Buy now</span>
                        <span>Add to Cart</span>
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
        <Modal
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
        </Modal>
      </div>
    </>
  );
}
