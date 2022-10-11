import React, { useState } from "react";
import products from "../../products";
import Navigation from "../homepage/Navigation";
import laptop from "../images/laptop.png";
import { Modal } from "antd";
import { useLocation } from "react-router-dom";
import Paystack from "../paystack/Paystack";

import "./pview.css";

export default function ViewProduct() {
  const location = useLocation();
  const [items, setItems] = useState(1);
  const [previewVisible, setPreviewVisible] = useState(false);

  const selected = location.pathname.split("/")[3];

  const product = products.filter((std) => {
    return std.id === selected;
  });

  const handleCancel = () => setPreviewVisible(false);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const decreaseProduct = (e) => {
    if (items === 0) {
      // e.preventDefault();
      setItems(0);
    } else {
      setItems(items - 1);
    }
  };
  const increaseProduct = () => {
    setItems(items + 1);
  };

  return (
    <>
      <Navigation />
      <div className="product-view">
        <div className="img-text">
          <div className="img">
            <img src={laptop} alt="" />
            <div className="other-imgs">
              <img src={laptop} alt="" />
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
                  <span>
                    &#9733;&#9733;&#9733;&#9733;&#9733; 4.8 | 200 sold | 18
                    reviews
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

                <div className="specifications">
                  <div className="color">
                    <h6>color: grey</h6>
                    <div className="quantity">
                      <h6>quantity: </h6>
                      <div className="">
                        <button
                          style={{
                            backgroundColor:
                              items === 0 ? "lightgrey" : "white",
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
                        setPreviewVisible(true);
                      }}
                    >
                      Buy now
                    </button>
                    <button>Add to Cart</button>
                  </div>
                  <Modal
                    visible={previewVisible}
                    style={{
                      height: "auto !important",
                      backgroundColor: "red",
                    }}
                    title={"previewTitle"}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <Paystack
                      amount={
                        ((parseInt(product[0].price) -
                          parseInt(product[0].subprice)) *
                        items) + "00"
                      }
                      name={product[0].name}
                      close={handleCancel}
                    />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
