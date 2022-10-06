import React from "react";
import Navigation from "../homepage/Navigation";
import bannerimage from "../images/products.jpg";
import laptop from "../images/laptop.png";
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
              <div className="cat-head-1">
                <h4>Laptops and Phones</h4>
              </div>
              <div className="cat-head-1">
                <a href="#">See more</a>
              </div>
            </div>
            <div className="cat-body">
              <div className="cat-item">
                <div className="cat-item-img">
                  <img src={laptop} alt="" />
                </div>
                <div className="item-content">
                  <h4>Hp laptop</h4>
                  <p>
                    Lorem ipsum dolor sit amet jide, ade elit. Harum laboriosam
                    voluptatibus
                  </p>
                  <h5>
                    <span>NGN</span>230,000<span>.34</span>
                  </h5>
                  <div className="buys">
                    <span>Buy now</span>
                    <span>Add to Cart</span>
                  </div>
                </div>
              </div>
              <div className="cat-item">
                <div className="cat-item-img">
                  <img src={laptop} alt="" />
                </div>
                <div className="item-content">
                  <h4>Hp laptop</h4>
                  <p>
                    Lorem ipsum dolor sit amet jide, ade elit. Harum laboriosam
                    voluptatibus
                  </p>
                  <h5>
                    <span>NGN</span>230,000<span>.34</span>
                  </h5>
                  <div className="buys">
                    <span>Buy now</span>
                    <span>Add to Cart</span>
                  </div>
                </div>
              </div>
              <div className="cat-item">
                <div className="cat-item-img">
                  <img src={laptop} alt="" />
                </div>
                <div className="item-content">
                  <h4>Hp laptop</h4>
                  <p>
                    Lorem ipsum dolor sit amet jide, ade elit. Harum laboriosam
                    voluptatibus
                  </p>
                  <h5>
                    <span>NGN</span>230,000<span>.34</span>
                  </h5>
                  <div className="buys">
                    <span>Buy now</span>
                    <span>Add to Cart</span>
                  </div>
                </div>
              </div>
              <div className="cat-item">
                <div className="cat-item-img">
                  <img src={laptop} alt="" />
                </div>
                <div className="item-content">
                  <h4>Hp laptop</h4>
                  <p>
                    Lorem ipsum dolor sit amet jide, ade elit. Harum laboriosam
                    voluptatibus
                  </p>
                  <h5>
                    <span>NGN</span>230,000<span>.34</span>
                  </h5>
                  <div className="buys">
                    <span>Buy now</span>
                    <span>Add to Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
