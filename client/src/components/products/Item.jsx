import React from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import laptop from "../images/laptop.png";

export default function Item(props) {
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const shortName = props.name.length > 15 ? props.name.slice(0, 14) + " ...." : props.name
  
  return (
    <>
      <div className="cat-items-container">
        <div className="cat-item">
          <div className="cat-item-img">
            <a href={"/products/view/" + props.id}>
              <img src={laptop} alt={props.name} />
            </a>
          </div>
          <div className="item-content">
            <p> {shortName} </p>
            <h4>{formatter.format(props.price)} <sub>{formatter.format(props.subprice)}</sub></h4>
            <span>your're saving 18%</span>
            <span>
              {props.sold} sold &#9733; {props.rating}
            </span>
            <span>
              <a href={`tel:${props.phone}`}>{props.call}</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
