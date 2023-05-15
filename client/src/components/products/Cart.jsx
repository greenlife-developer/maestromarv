import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [sales, setSales] = useState(null);
  const [cartno, setCartno] = useState("0");
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    axios.get("/api").then((data) => {
      // console.log(data.data.cart);
      
      if (data.data.isLogin === false) {
        setIcon(false);
        setCart(null);
        setCartno("0");
        setSales(null);
      }
      if (data.data.isLogin === true) {
        const result = data.data.cart.filter((std) => {
          return std.user.email === data.data.user.email;
        });
        // console.log(result.length);
        setCart(result);
        setCartno(result.length);
        setSales(data.data.sales);
        setIcon(true);
      }
    });
  }, []);

  // console.log(cart);

  return (
    <div className="cart-container">
      <div className="cart" style={{ marginLeft: "100px" }}>
        <div
          className="btn btn-primary icon"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          // className="icon"
        >
          {icon ? (
            <i className="fa-solid fa-cart-shopping"></i>
          ) : (
            <i className="fa-solid fa-lock"></i>
          )}
        </div>
        <div className="item-no">
          <span>{cartno}</span>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Orders Details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body" id="canvasBody">
          <div className="order-page">
            <div className="cart-details">
              <h4>View Your Cart({cartno})</h4>
              <div className="cart-items">
                {cart
                  ? cart.map((cat, id) => {
                      return (
                        <Item
                          key={id}
                          sold={cat[0].sold}
                          url={cat[0].img}
                          name={cat[0].name}
                          id={cat[0].id}
                          price={cat[0].price}
                          rating={cat[0].rating}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
            <br />
            <br />

            <div className="cart-details">
              <h4>View Your Orders</h4>
              <div className="cart-items">
                {sales && sales[0] && sales[0].item
                  ? sales.map((sale, id) => {
                      return (
                        <Item
                          key={id}
                          sold={sale.item[0].sold}
                          name={sale.item[0].name}
                          id={sale.item[0].id}
                          url={sale.item[0].img}
                          price={sale.item[0].price}
                          rating={sale.item[0].rating}
                          phone={sale.item[0].phone}
                          call={"call"}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
