import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import FileUpload from "./FileUpload";

export default function New() {
  const redirect = useNavigate();
  const location = useLocation();

  const [products, setProduct] = useState(null);
  const selected = location.pathname.split("/")[2];

  useEffect(() => {
    axios
      .get("/api/new-product")
      // .then((res) => res.json())
      .then((data) => {
        console.log(data.data.products);
        if (data.data) {
          setProduct(data.data.products);
        }
      });
  }, []);

  const editedProduct = products
    ? products.filter((std) => {
        return std._id === selected;
      })
    : null;

  if (products) {
    console.log("selected product", editedProduct, "selected id", selected);
  }

  return (
    <>
      <div className="new-products">
        <div className="app-details">
          <div className="">
            <div className="details-form">
              <div className="form">
                <form
                  action={"/api/new-product/edit/" + selected}
                  method="POST"
                >
                  <div className="issue-details">
                    <h3>Edit This Product</h3>
                  </div>
                  <div className="issue-type">
                    <label htmlFor="type">Name</label>
                    <br />
                    <input
                      type="text"
                      name="productName"
                      value={products ? editedProduct[0].name : ""}
                      id=""
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Category</label>
                    <br />
                    <select name="category" id="">
                      <option value="">Select a category</option>
                      <option
                        value="electronics"
                        selected={
                          products !== null &&
                          editedProduct[0].category === "electronics"
                            ? selected
                            : ""
                        }
                      >
                        Electronics
                      </option>
                      <option
                        value="laptop"
                        selected={
                          products !== null &&
                          editedProduct[0].category === "laptop"
                            ? selected
                            : ""
                        }
                      >
                        Laptops
                      </option>
                      <option
                        value="phone"
                        selected={
                          products !== null &&
                          editedProduct[0].category === "phone"
                            ? selected
                            : ""
                        }
                      >
                        Phones
                      </option>
                      <option
                        value="other"
                        selected={
                          products !== null &&
                          editedProduct[0].category === "other"
                            ? selected
                            : ""
                        }
                      >
                        Other Accessories
                      </option>
                    </select>
                    {/* <input type="text" name="productName" id="" /> */}
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Price</label>
                    <br />
                    <input
                      type="text"
                      name="price"
                      value={products ? editedProduct[0].price : ""}
                      id=""
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Slash Price</label>
                    <br />
                    <input
                      type="text"
                      name="slprice"
                      defaultValue={products ? editedProduct[0].subprice : ""}
                      id=""
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Color</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="text"
                      defaultValue={products ? editedProduct[0].color : ""}
                      name="color"
                      placeholder="color"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Rating</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="number"
                      name="rating"
                      defaultValue={products ? editedProduct[0].rating : ""}
                      placeholder="rating"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Sold</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="number"
                      name="sold"
                      defaultValue={products ? editedProduct[0].sold : ""}
                      placeholder="Number of sales"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Image url</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="text"
                      name="url"
                      defaultValue={products ? editedProduct[0].img : ""}
                      placeholder="Enter th url for this product"
                      required
                    />
                  </div>
                  <br />
                  {/* <FileUpload /> */}
                  {/* <br /> */}
                  <div className="issue-type">
                    <label htmlFor="type">
                      Description(Please make use of the markdown text)
                    </label>
                    <br />
                    <textarea
                      name="description"
                      // onChange={handleChange}
                      id=""
                      cols="30"
                      rows="5"
                      defaultValue={
                        products ? editedProduct[0].description : ""
                      }
                      placeholder="Product descrription here"
                      required
                    ></textarea>
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">
                      Other Specifications(use markdown :)
                    </label>
                    <br />
                    <textarea
                      name="specification"
                      // onChange={handleChange}
                      id=""
                      cols="30"
                      rows="5"
                      defaultValue={
                        products ? editedProduct[0].specification : ""
                      }
                      placeholder="Write specifications in markdown"
                      required
                    ></textarea>
                  </div>
                  <div className="issue-type">
                    <button type="submit">Add a New Product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
