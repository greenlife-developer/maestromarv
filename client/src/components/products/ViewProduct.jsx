import React from "react";
import products from "../../products";
import Navigation from "../homepage/Navigation";
import laptop from "../images/laptop.png";
import { useLocation } from "react-router-dom";

import "./pview.css";

export default function ViewProduct() {
  const location = useLocation();

  const selected = location.pathname.split("/")[3];

  const product = products.filter((std) => {
    return std.id === selected;
  });

  console.log(product);

  const handleImageChange = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <Navigation />
      <div className="product-view">
        <div className="img-text">
          <div className="img">
            <img src={laptop} alt="" />
            <div className="other-imgs">
              <img onClick={handleImageChange} src={laptop} alt="" />
              <img src={laptop} alt="" />
              <img src={laptop} alt="" />
              <img src={laptop} alt="" />
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
                  <span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.8 200 sold</span>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
