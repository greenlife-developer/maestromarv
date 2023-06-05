import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload";

export default function New() {
  const redirect = useNavigate();
  const [details, setDetails] = useState({
    priority: "",
    type: "",
    subject: "",
    details: "",
  });


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
       setLoading(false)
    }, 5000)
  }, []);

  if(loading) {
    return (
      <div className="loader-container">
        <div class="loader"></div>
      </div>
    )
  }

  return (
    <>
      <div className="new-products">
        <div className="app-details">
          <div className="">
            <div className="details-form">
              <div className="form">
                <form action="/api/new-product" method="POST">
                  <div className="issue-details">
                    <h3>Add a New Product Here</h3>
                  </div>
                  <div className="issue-type">
                    <label htmlFor="type">Name</label>
                    <br />
                    <input type="text" name="productName" id="" />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Category</label>
                    <br />
                    <select name="category" id="">
                      <option value="electronics">Electronics</option>
                      <option value="laptop">Laptops</option>
                      <option value="phone">Phones</option>
                      <option value="other">Other Accessories</option>
                    </select>
                    {/* <input type="text" name="productName" id="" /> */}
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Price</label>
                    <br />
                    <input type="text" name="price" id="" />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Slash Price</label>
                    <br />
                    <input type="text" name="slprice" id="" />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Color</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="text"
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
                      placeholder="Number of sales"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Image main product image url</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="text"
                      name="url"
                      placeholder="Enter a url for this product"
                      required
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Image url 1</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="text"
                      name="img1"
                      placeholder="Enter a url for this product"
                    />
                  </div>
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Image url 2</label>
                    <br />
                    <input
                      // onChange={handleChange}
                      type="text"
                      name="img2"
                      placeholder="Enter a url for this product"
                    />
                  </div>
                  <br />
                  {/* <FileUpload /> */}
                  {/* <br /> */}
                  <div className="issue-type">
                    <label htmlFor="type">Description(Please make use of the markdown text)</label>
                    <br />
                    <textarea
                      name="description"
                      // onChange={handleChange}
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Product descrription here"
                      required
                    ></textarea>
                  </div><br />
                  <div className="issue-type">
                    <label htmlFor="type">Other Specifications(use markdown :)</label>
                    <br />
                    <textarea
                      name="specification"
                      // onChange={handleChange}
                      id=""
                      cols="30"
                      rows="5"
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
