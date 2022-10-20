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
            <p>
              <ResponsiveEllipsis
                text={props.name}
                maxLine="1"
                ellipsis="..."
                basedOn="letters"
              />
            </p>
            <h4>{formatter.format(props.price)}</h4>
            <span>your're saving 18%</span>
            <br />
            <span>
              {props.sold} sold &#9733; {props.rating}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
