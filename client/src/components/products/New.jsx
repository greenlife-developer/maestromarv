import React, {useState} from "react";
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      if (name === "priority") {
        return {
          priority: value,
          type: prev.type,
          subject: prev.subject,
          details: prev.details,
        };
      }
      if (name === "type") {
        return {
          priority: prev.priority,
          type: value,
          subject: prev.subject,
          details: prev.details,
        };
      }
      if (name === "subject") {
        return {
          priority: prev.priority,
          type: prev.type,
          subject: value,
          details: prev.details,
        };
      }
      if (name === "details") {
        return {
          priority: prev.priority,
          type: prev.type,
          subject: prev.subject,
          details: value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("details", JSON.stringify(details));
    redirect("/make-appointment/contact");
  };


  return (
    <>
      <div className="new-products">
        <div className="app-details">
          <div className="">
            <div className="details-form">
              <div className="form">
                <form action="" onSubmit={handleSubmit}>
                  <div className="issue-details">
                    <h3>Add a new product here...</h3>
                  </div>
                  <div className="issue-type">
                    <label htmlFor="type">Name</label>
                    <br />
                    <input type="text" name="productName" id="" />
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
                      onChange={handleChange}
                      type="text"
                      name="color"
                      placeholder="color"
                      required
                    />
                  </div><br />
                  <div className="issue-type">
                    <label htmlFor="type">Rating</label>
                    <br />
                    <input
                      onChange={handleChange}
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
                      onChange={handleChange}
                      type="number"
                      name="sold"
                      placeholder="Number of sales"
                      required
                    />
                  </div>
                  <br />
                  <FileUpload />
                  <br />
                  <div className="issue-type">
                    <label htmlFor="type">Description(Please make use of the markdown text)</label>
                    <br />
                    <textarea
                      name="details"
                      onChange={handleChange}
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
                      name="details"
                      onChange={handleChange}
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Write specifications in markdown"
                      required
                    ></textarea>
                  </div>
                  <div className="issue-type">
                    <button type="submit">Next</button>
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
