import React, { useEffect, useState } from "react";
import Navigation from "../homepage/Navigation";
import phoneaccess from "../images/phoneaccess.jpg";
import productImage from "../images/products.jpg";
import { Carousel } from "antd";
// import "antd/dist/antd.min.css";
import "./products.css";
// import products from "../../products";
import Footer from "../homepage/Footer";
import Cart from "./Cart";
import Item from "./Item";
import axios from "axios";

export default function Product() {
  const contentStyle = {
    // height: "25vh",
    color: "#fff",
    marginTop: "60px",
    textAlign: "center",
    boxShadow: "inset 2px 2px 1000px rgba(0, 0, 0, 0.8)",
    background: "#02026B",
  };

  //  const result = styles.filter((std) => {
  //   return std.name === style;
  // });

  // const [filteredProduct, setFilteredProduct] = useState(products);
  const [keyword, setKeyword] = useState("");
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

  // {items
  //   ? items
  //       .filter((item) => {
  //         if (keyword === "") {
  //           return item;
  //         } else if (
  //           item.productName
  //             .toLowerCase()
  //             .includes(keyword.toLowerCase())
  //         ) {
  //           return item;
  //         }
  //         return ""
  //       })

  function handleSearch(e) {
    setKeyword(e.target.value);
  }

  const laptops = products ? products.filter((laptop) => {
    return laptop.category === "laptop";
  }) : null;
  const phones = products ? products.filter((phone) => {
    return phone.category === "phone";
  }) : null;
  const electronics = products ? products.filter((electronic) => {
    return electronic.category === "electronics";
  }) : null;
  const otherAccessories = products ? products.filter((other) => {
    return other.category === "other";
  }) : null;

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
              <i className="fa-solid fa-magnifying-glass"></i>
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
              {laptops
                ? laptops
                    .filter((item) => {
                      if (keyword === "") {
                        return item;
                      } else if (
                        item.name.toLowerCase().includes(keyword.toLowerCase())
                      ) {
                        return item;
                      }
                      return "There is no item in this category";
                    })
                    .map((product, index) => {
                      return (
                        <Item
                          key={index}
                          sold={product.sold}
                          name={product.name}
                          id={product._id}
                          subprice={Number(product.subprice)}
                          url={product.img}
                          price={Number(product.price)}
                          rating={product.rating}
                        />
                      );
                    })
                : "There is no item in this category"}
            </div>
          </div>

          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Phones</h1>
              </div>
            </div>
            <div className="cat-body">
              {phones
                ? phones
                    .filter((item) => {
                      if (keyword === "") {
                        return item;
                      } else if (
                        item.name.toLowerCase().includes(keyword.toLowerCase())
                      ) {
                        return item;
                      }
                      return "";
                    })
                    .map((product, index) => {
                      return (
                        <Item
                          key={index}
                          sold={product.sold}
                          id={product._id}
                          name={product.name}
                          subprice={Number(product.subprice)}
                          url={product.img}
                          price={Number(product.price)}
                          rating={product.rating}
                        />
                      );
                    })
                : "There is no item in this category"}
            </div>
          </div>

          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Electronics</h1>
              </div>
            </div>
            <div className="cat-body">
              {electronics
                ? electronics
                    .filter((item) => {
                      if (keyword === "") {
                        return item;
                      } else if (
                        item.name.toLowerCase().includes(keyword.toLowerCase())
                      ) {
                        return item;
                      }
                      return "";
                    })
                    .map((product, index) => {
                      return (
                        <Item
                          key={index}
                          sold={product.sold}
                          id={product._id}
                          name={product.name}
                          subprice={Number(product.subprice)}
                          url={product.img}
                          price={Number(product.price)}
                          rating={product.rating}
                        />
                      );
                    })
                : "There is no item in this category"}
            </div>
          </div>

          <div className="category-1">
            <div className="cat-head">
              <div className="cat-head-1">
                <h1>Other Accessories</h1>
              </div>
            </div>
            <div className="cat-body">
              {otherAccessories
                ? otherAccessories
                    .filter((item) => {
                      if (keyword === "") {
                        return item;
                      } else if (
                        item.name.toLowerCase().includes(keyword.toLowerCase())
                      ) {
                        return item;
                      }
                      return "";
                    })
                    .map((product, index) => {
                      return (
                        <Item
                          key={index}
                          sold={product.sold}
                          id={product._id}
                          name={product.name}
                          subprice={Number(product.subprice)}
                          url={product.img}
                          price={Number(product.price)}
                          rating={product.rating}
                        />
                      );
                    })
                : "There is no item in this category"}
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
