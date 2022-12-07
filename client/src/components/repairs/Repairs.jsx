import React from "react";
import Navigation from "../homepage/Navigation";
import Footer from "../homepage/Footer";
import repairImage from "../images/image5.jpg";
import "./repairs.css"

export default function Repairs() {
  return (
    <>
      <Navigation />
      <div className="repairs-page">
        <h1>We do all kinds of repairs and maintainance</h1>
        <div className="repair-items">
          <div className="repair-item">
            <div className="repair-item-img">
              <img src={repairImage} alt="repair Image" />
              <h3>Laptop Repair</h3>
            </div>
            <div className="repair-item-txt">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                repellat dicta nulla ducimus, nemo est eaque recusandae
                doloremque autem optio esse laborum adipisci quo praesentium?
                Ab, voluptatum, tenetur hic vero reiciendis commodi optio quidem
                beatae veritatis non libero ducimus ut. Similique aliquid
                placeat ea? Animi corrupti fugit minima doloribus sunt natus
                ullam numquam nisi, distinctio deleniti possimus incidunt
                cupiditate ab, labore nostrum similique quaerat enim sit?
                Deserunt vero distinctio quis labore enim beatae maxime et
                doloremque culpa fugit asperiores rem perspiciatis accusantium
                ipsum, dolor sint earum. Accusantium sapiente cupiditate tempore
                nostrum nemo ullam, error, praesentium corporis minima fugiat
                blanditiis sunt?
              </p>
              <button>Make Appointment</button>
            </div>
          </div>
          <div className="repair-item">
            <div className="repair-item-img">
              <img src={repairImage} alt="repair Image" />
              <h3>Laptop Repair</h3>
            </div>
            <div className="repair-item-txt">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                repellat dicta nulla ducimus, nemo est eaque recusandae
                doloremque autem optio esse laborum adipisci quo praesentium?
                Ab, voluptatum, tenetur hic vero reiciendis commodi optio quidem
                beatae veritatis non libero ducimus ut. Similique aliquid
                placeat ea? Animi corrupti fugit minima doloribus sunt natus
                ullam numquam nisi, distinctio deleniti possimus incidunt
                cupiditate ab, labore nostrum similique quaerat enim sit?
                Deserunt vero distinctio quis labore enim beatae maxime et
                doloremque culpa fugit asperiores rem perspiciatis accusantium
                ipsum, dolor sint earum. Accusantium sapiente cupiditate tempore
                nostrum nemo ullam, error, praesentium corporis minima fugiat
                blanditiis sunt?
              </p>
              <button>Make Appointment</button>
            </div>
          </div>
          <div className="repair-item">
            <div className="repair-item-img">
              <img src={repairImage} alt="repair Image" />
              <h3>Laptop Repair</h3>
            </div>
            <div className="repair-item-txt">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                repellat dicta nulla ducimus, nemo est eaque recusandae
                doloremque autem optio esse laborum adipisci quo praesentium?
                Ab, voluptatum, tenetur hic vero reiciendis commodi optio quidem
                beatae veritatis non libero ducimus ut. Similique aliquid
                placeat ea? Animi corrupti fugit minima doloribus sunt natus
                ullam numquam nisi, distinctio deleniti possimus incidunt
                cupiditate ab, labore nostrum similique quaerat enim sit?
                Deserunt vero distinctio quis labore enim beatae maxime et
                doloremque culpa fugit asperiores rem perspiciatis accusantium
                ipsum, dolor sint earum. Accusantium sapiente cupiditate tempore
                nostrum nemo ullam, error, praesentium corporis minima fugiat
                blanditiis sunt?
              </p>
              <button>Make Appointment</button>
            </div>
          </div>
          <div className="repair-item">
            <div className="repair-item-img">
              <img src={repairImage} alt="repair Image" />
              <h3>Laptop Repair</h3>
            </div>
            <div className="repair-item-txt">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                repellat dicta nulla ducimus, nemo est eaque recusandae
                doloremque autem optio esse laborum adipisci quo praesentium?
                Ab, voluptatum, tenetur hic vero reiciendis commodi optio quidem
                beatae veritatis non libero ducimus ut. Similique aliquid
                placeat ea? Animi corrupti fugit minima doloribus sunt natus
                ullam numquam nisi, distinctio deleniti possimus incidunt
                cupiditate ab, labore nostrum similique quaerat enim sit?
                Deserunt vero distinctio quis labore enim beatae maxime et
                doloremque culpa fugit asperiores rem perspiciatis accusantium
                ipsum, dolor sint earum. Accusantium sapiente cupiditate tempore
                nostrum nemo ullam, error, praesentium corporis minima fugiat
                blanditiis sunt?
              </p>
              <button>Make Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
