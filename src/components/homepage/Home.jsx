import React from "react";
import Navigation from "./Navigation";
import image from "../images/image1.png";
import image7 from "../images/image7.png";
import image2 from "../images/image2.jpg";
import image4 from "../images/image4.jpg";
import image6 from "../images/image6.jpg";
import image5 from "../images/image5.jpg";
import video2 from "../images/videos/video2.mp4";
import section2 from "../images/section2.png";
import "./home.css";
import Swipper from "./Reviews";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div
        id="demo"
        class="carousel slide carousel-container"
        data-ride="carousel"
      >
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image} alt="Los Angeles" width="100%" />
            <div className="content-carouel">
              <div className="">
                <h1>Welcome to MaestroMarv Tech Solution (MTS).</h1>
                <p>
                  Welcome to Maestromarv Tech solutions, thank you for choosing
                  us, we welcome you to our world.
                </p>
                <button>Start now</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image} alt="Chicago" width="100%" />
          </div>
          <div class="carousel-item">
            <img src={image} alt="New York" width="100%" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>

      <div className="">
        <h1 className="text-center text-primary">Why choose us?</h1>
        <div className="phone-pc">
          <div className="phone-pc-info">
            <p className="phone-text">
              Imagine that your gadget is an extension of your mind. We know how
              important the mind is to the body, therefore, we consider your
              gadget as important to you as the mind is to the body. Therefore
              at every turn, we incorporate a customer service strategy that
              prioritizes your interests – the wholeness of the filters (namely,
              devices) that shape your experience of modern society. We provide
              an intimate and mutually beneficial relationship that will
              eventually create trust and stability in your use of technology
              and gadgets.
            </p>
            <p>
              We provide more than just ‘gadget repair’ or ‘computer business’;
              much more, we are committed to the continuity of your smooth
              gadget use and technology experience.
            </p>
            <button>Make appointment</button>
          </div>
          <div className="phone-pc-img">
            <video src={video2} autoPlay muted loop className="myVideo">
              <source type="video/mp4" />
            </video>
            {/* <img src={image3} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="section-2">
        <img src={section2} alt="" />
        <div className="section-2-content">
          <h1 className="text-light">We repair all laptops and phones</h1>
          <button>make appointment</button>
        </div>
      </div><br /><br />

      <div className="">
        <h3>Our Services</h3>
        <div className="section-3">
          <div className="section-3-box">
            <img src={image2} alt="" />
            <div className="section-3-content">
              <h1>Computer Repair</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur, quasi saepe ex ipsam
                nulla culpa!
              </p>
              <button>Make appointment</button>
            </div>
          </div>
          <div className="section-3-box">
            <img src={image4} alt="" />
            <div className="section-3-content">
              <h1>Liquid Damage Repair</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur, quasi saepe ex ipsam
                nulla culpa!
              </p>
              <button>Make appointment</button>
            </div>
          </div>
          <div className="section-3-box">
            <img src={image6} alt="" />
            <div className="section-3-content">
              <h1>Custom Build Computers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur, quasi saepe ex ipsam
                nulla culpa!
              </p>
              <button>Make appointment</button>
            </div>
          </div>
          <div className="section-3-box">
            <img src={image5} alt="" />
            <div className="section-3-content">
              <h1>Windows installation</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur, quasi saepe ex ipsam
                nulla culpa!
              </p>
              <button>Make appointment</button>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <Swipper />
      </div>
      <div className="section-5">
        <img src={image7} alt="" />
      </div>
      <div className="section-6">
        <div className="about">
          <h3>About MaestroMarv Tech Solution (MTS)</h3>
        </div>
        <div className="about-content">
          <div className="">
            <p>
              At MTS, we are saddled with a burden of helping individuals
              experience technology smoothly and experientially. Therefore our
              core values are shaped by empathy for our customers and passion
              for technology. We let our passion for technology drive what we
              do, and at the same time we let empathy for our customers guide
              how we treat people.
            </p>
            <p>
              We have designed a great way of making our customers feel welcome
              here at MTS. One way by which we do this is answering your
              tech-related questions and concerns in the blog sections. Another
              way we do this is through the provision of free consultation to
              customers who wish to know the condition of their device before
              they make their decision on repair or replacement. Whichever of
              our services you require, we are here to serve it on a platter of
              trusted stewardship. Once again, we say welcome to MTS, a place
              where smooth experience of tech is guaranteed.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
        <div className="mts-copy">
          <p>
            &copy; 2022 Maestromarv Tech Solution. All Rights Reserved |
            Delivery & Pick-Up Services | Computer Recycling Services All
            trademarks displayed on this website are the property of the
            trademark owner. MaestroMarv does not claim any ownership or
            affiliation with the brands displayed.
          </p>
        </div>
      </div>
    </>
  );
}
