import React, { useState } from "react";
import Navigation from "../homepage/Navigation";
import phoneaccess from "../images/phoneaccess.jpg";
import laptopaccess from "../images/laptopaccess.jpg";
import productImage from "../images/products.jpg";
import accessories from "../images/accessories.jpg";
import { Carousel } from "antd";
// import "antd/dist/antd.min.css";
import "./products.css";
import products from "../../products";
import Footer from "../homepage/Footer";
import Cart from "./Cart";
import Item from "./Item";

export default function Product() {
  const contentStyle = {
    height: "45vh",
    color: "#fff",
    marginTop: "60px",
    textAlign: "center",
    boxShadow: "inset 2px 2px 1000px rgba(0, 0, 0, 0.8)",
    background: "#02026B",
  };

  //  const result = styles.filter((std) => {
  //   return std.name === style;
  // });

  const [filteredProduct, setFilteredProduct] = useState(products);

  function handleSearch(e) {
    const search = e.target.value;
    const result = products.filter((std) => {
      return std.name.contains(search);
    });
    setFilteredProduct(result);
  }

  const laptops = filteredProduct.filter((laptop) => {
    return laptop.category === "laptop";
  });
  const phones = filteredProduct.filter((phone) => {
    return phone.category === "phone";
  });
  const electronics = filteredProduct.filter((electronic) => {
    return electronic.category === "electronics";
  });
  const otherAccessories = filteredProduct.filter((other) => {
    return other.category === "other accessories";
  });

  return (
    <>
      <div className="product-page-container">
        <Navigation />

        <Carousel effect="fade" autoplay>
          <div>
            <div className="antd-product-carousel" style={contentStyle}>
              <img src={phoneaccess} alt="" />
            </div>
          </div>
          <div>
            <div className="antd-product-carousel" style={contentStyle}>
              <img src={productImage} alt="" />
            </div>
          </div>
        </Carousel>

        <Cart />

        <div className="product-categories">
          <div className="search">
            <div className="product-search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products"
              className="search"
            />
          </div>
          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Laptops</h1>
              </div>
            </div>
            <div className="cat-body">
              {laptops.map((product, index) => {
                return (
                  <Item
                    key={index}
                    sold={product.sold}
                    name={product.name}
                    url={product.img}
                    subprice={product.subprice}
                    id={product.id}
                    price={product.price}
                    rating={product.rating}
                  />
                );
              })}
            </div>
          </div>

          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Phones</h1>
              </div>
            </div>
            <div className="cat-body">
              {phones.map((product, index) => {
                return (
                  <Item
                    key={index}
                    sold={product.sold}
                    name={product.name}
                    subprice={product.subprice}
                    src={product.img}
                    url={product.img}
                    id={product.id}
                    price={product.price}
                    rating={product.rating}
                  />
                );
              })}
            </div>
          </div>

          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Electronics</h1>
              </div>
            </div>
            <div className="cat-body">
              {electronics.map((product, index) => {
                return (
                  <Item
                    key={index}
                    sold={product.sold}
                    name={product.name}
                    subprice={product.subprice}
                    id={product.id}
                    url={product.img}
                    price={product.price}
                    rating={product.rating}
                  />
                );
              })}
            </div>
          </div>

          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Other Accessories</h1>
              </div>
            </div>
            <div className="cat-body">
              {otherAccessories.map((product, index) => {
                return (
                  <Item
                    key={index}
                    sold={product.sold}
                    name={product.name}
                    subprice={product.subprice}
                    id={product.id}
                    url={product.img}
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
