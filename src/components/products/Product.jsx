import React from "react";
import Navigation from "../homepage/Navigation";
import bannerimage from "../images/products.jpg";
import "./products.css";

export default function Product() {
  return (
    <>
      <div className="">
        <Navigation />
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
              <div className="cat-head-1"><h1>Laptops and Phones</h1></div>
              <div className="cat-head-1"><h3>See more</h3></div>
            </div>
            <div className="cat-body">
              <div className="cat-item">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
