import React from "react";
import Navigation from "../homepage/Navigation";
import phoneaccess from "../images/phoneaccess.jpg";
import laptopaccess from "../images/laptopaccess.jpg";
import accessories from "../images/accessories.jpg";
import "antd/dist/antd.min.css";
import "./products.css";
import products from "../../products";
import Footer from "../homepage/Footer";
import Cart from "./Cart";
import Item from "./Item";

export default function Product() {

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
                    Welcome to Maestromarv Tech solutions, welcome you to our world.
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

        <Cart />

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
                  <Item
                    key={index}
                    sold={product.sold}
                    name={product.name}
                    subprice={product.subprice}
                    id={product.id}
                    price={product.price}
                    rating={product.rating}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
