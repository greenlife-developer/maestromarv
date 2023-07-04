import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function Cart() {
  const [cartno, setCartno] = useState("0");
  const [user, setUser] = useState(null)
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    axios.get("/api").then((data) => {
      if (data.data.isLogin === false) {
        setIcon(false);
        setCartno("0");
      }
      if (data.data.isLogin === true) {
        const result = data.data.cart.filter((std) => {
          return std.user.email === data.data.user.email;
        });
        setCartno(result.length);
        setUser(data.data.user)
        setIcon(true);
      }
    });
  }, []);

  return (
    <div className="cart-container">
      <div className="cart" style={{ marginLeft: "100px" }}>
        <Link to={ user ? "/transactions" : "/login?error=login-to-proceed-to-cart"}>
          <div className="icon" type="button">
            {icon ? (
              <i className="fa-solid fa-cart-shopping"></i>
            ) : (
              <i className="fa-solid fa-lock"></i>
            )}
          </div>
          <div className="item-no">
            <span>{cartno}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
