import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [sales, setSales] = useState(null);
  const [cartno, setCartno] = useState(null);

  useEffect(() => {
    axios.get("/api").then((data) => {
      if (data.data) {
        setCart(data.data.cart);
        setCartno(data.data.cart.length);
        setSales(data.data.sales);
      }
    });
  }, []);

  console.log(cart)

  return (
    <div className="cart-container">
      <div className="cart" style={{ marginLeft: "100px" }}>
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          className="icon"
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="item-no">
          <span>{cartno}</span>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Orders Details
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
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
                          name={cat[0].name}
                          id={cat[0].id}
                          price={cat[0].price}
                          rating={cat[0].rating}
                        />
                      );
                    })
                  : null}
              </div>
            </div><br /><br />

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
