import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Item(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api").then((data) => {
      if (data.data) {
        setUser(data.data.user);
      }
    });
  }, []);

  const percent = Math.round(
    (Number(props.subprice) / Number(props.price)) * 100
  );

  const shortName =
    props.name.length > 15 ? props.name.slice(0, 14) + " ...." : props.name;

  return (
    <>
      <div className="cat-items-container">
        <div className="cat-item">
          <div className="cat-item-img">
            <a href={"/products/view/" + props.id}>
              <img src={props.url} alt={props.name} />
            </a>
          </div>
          <div className="item-content">
            <a href={"/products/view/" + props.id}>
              <p> {shortName} </p>
              <h4>
                {formatter.format(props.price)}{" "}
                <sub>
                  {formatter.format(
                    Number(props.price) + Number(props.subprice)
                  )}
                </sub>
              </h4>
              <span>your're saving {percent}%</span>
              {props.sold ? (
                <span>
                  {props.sold} sold &#9733; {props.rating}
                </span>
              ) : null}
            </a>
            <span>
              <a href={`tel:${props.phone}`}>{props.call}</a>
            </span>

            {user && user.email === "maestromarve@gmail.com" ? (
              <span>
                <Link to={"/edit-products/" + props.id}>Edit</Link>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
