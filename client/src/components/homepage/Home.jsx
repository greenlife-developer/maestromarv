import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import image from "../images/image2.jpg";
import carousel from "../images/we fix androids.jpg";
import carousel1 from "../images/mac fixing.jpg";
import carousel2 from "../images/we fix laptops.jpg";
import carousel3 from "../images/we fix iphones.jpg";
import carousel4 from "../images/carousel3.jpg";
import carousel5 from "../images/carousel4.jpg";
import AOS from "aos";
import image2 from "../images/image2.jpg";
import { Link } from "react-router-dom";
import image4 from "../images/image4.jpg";
import image6 from "../images/image6.jpg";
import image5 from "../images/image5.jpg";
import { Carousel } from "antd";
import video2 from "../images/videos/video2.mp4";
import "aos/dist/aos.css";
import Swipper from "./Reviews";
import Footer from "./Footer";
import Cart from "../products/Cart";

import "./home.css";

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false)


  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
    AOS.refresh();

    setTimeout(() => {
       setLoading(false)
    }, 5000)
  }, []);

  const handleCarouselChange = () => {
    setAnimate(!animate)
  }

  const contentStyle = {
    height: "90vh",
    color: "#fff",
    marginTop: "60px",
    textAlign: "center",
    boxShadow: "inset 2px 2px 1000px rgba(0, 0, 0, 0.8)",
    background: "#02026B",
  };

  if(loading) {
    return (
      <div className="loader-container">
        <div class="loader"></div>
      </div>
    )
  }
  

  return (
    <>
      <Navigation />
      {/* <Cart /> */}

      <Carousel effect="fade" afterChange={handleCarouselChange} autoplay autoplaySpeed={4000}>
        <div>
          <div className="antd-content-carousel1" style={contentStyle}>
            <img src={image} alt="" />
            <div className="antd-opacity-container">
              <div className="content-carousel">
                <div className={animate ? "mastro-fade-down" : ""}>
                  <h1>Welcome to MaestroMarv Tech Solution (MTS).</h1>
                  <p>Welcome to our world.</p>
                  <button>
                    <Link
                      className="make-appointment-btn"
                      to="/make-appointment/first-contact/#topup"
                    >
                      Make Appointment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="antd-content-carousel" style={contentStyle}>
            <img src={carousel} alt="" />
            <div className="antd-opacity-container">
              <div className="content-carousel">
                <div className={animate ? "mastro-fade-down" : ""}>
                  <h1>We fix androids at MaestroMarv Tech Solution</h1>
                  {/* <p>Welcome to our world.</p> */}
                  <button>
                    <Link
                      className="make-appointment-btn"
                      to="/make-appointment/first-contact/#topup"
                    >
                      Make Appointment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="antd-content-carousel" style={contentStyle}>
            <img src={carousel1} alt="" />
            <div className="antd-opacity-container">
              <div className="content-carousel">
                <div className={animate ? "mastro-fade-down" : ""}>
                  <h1>We fix macbooks at MaestroMarv Tech Solution</h1>
                  {/* <p>Welcome to our world.</p> */}
                  <button>
                    <Link
                      className="make-appointment-btn"
                      to="/make-appointment/first-contact/#topup"
                    >
                      Make Appointment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="antd-content-carousel" style={contentStyle}>
            <img src={carousel3} alt="" />
            <div className="antd-opacity-container">
              <div className="content-carousel">
                <div className={animate ? "mastro-fade-down" : ""}>
                  <h1>We fix iPhones at MaestroMarv Tech Solution.</h1>
                  {/* <p>Welcome to our world.</p> */}
                  <button>
                    <Link
                      className="make-appointment-btn"
                      to="/make-appointment/first-contact/#topup"
                    >
                      Make Appointment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="antd-content-carousel" style={contentStyle}>
            <img src={carousel2} alt="" />
            <div className="antd-opacity-container">
              <div className="content-carousel">
                <div className={animate ? "mastro-fade-down" : ""}>
                  <h1>We fix laptops at MaestroMarv Tech Solution</h1>
                  {/* <p>Welcome to our world.</p> */}
                  <button>
                    <Link
                      className="make-appointment-btn"
                      to="/make-appointment/first-contact/#topup"
                    >
                      Make Appointment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="antd-content-carousel" style={contentStyle}>
            <img src={carousel4} alt="" />
            <div className="antd-opacity-container">
              <div className="content-carousel">
                <div className={animate ? "mastro-fade-down" : ""}>
                  <h1>We sell Embedded system and IOT components at MaestroMarv Tech Solution</h1>
                  {/* <p>Welcome to our world.</p> */}
                  <button>
                    <Link
                      className="make-appointment-btn"
                      to="/make-appointment/first-contact/#topup"
                    >
                      Make Appointment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="antd-content-carousel" style={contentStyle}>
            <img src={carousel5} alt="" />
            <div className="antd-opacity-container">
              <div className="content-carousel">
                <div className={animate ? "mastro-fade-down" : ""}>
                  <h1>We sell Gadgets and Accessories at MaestroMarv Tech Solution</h1>
                  {/* <p>Welcome to our world.</p> */}
                  <button>
                    <Link
                      className="make-appointment-btn"
                      to="/make-appointment/first-contact/#topup"
                    >
                      Make Appointment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="fist-section">
        <h1 className="text-center" data-aos="fade-right">
          Why choose us?
        </h1>
        <div className="phone-pc">
          <div className="phone-pc-info" data-aos="fade-up">
            <p className="phone-text">
              Imagine your gadget is an extension of your mind. We consider your
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
            <button>
              <Link
                className="make-appointment-btn"
                to="/make-appointment/first-contact/#topup"
              >
                Make Appointment
              </Link>
            </button>
          </div>
          <div className="phone-pc-img" data-aos="fade-down">
            <video src={video2} autoPlay muted loop className="myVideo">
              <source type="video/mp4" />
            </video>
            {/* <img src={image3} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="section-2-content" data-aos="fade-down">
          <h1 className="text-light">We repair all laptops and phones</h1>
          <p>
            For all your laptop or phone repairs, look no further than our
            repair shop! Our experienced technicians are knowledgeable and can
            handle a wide range of issues while providing affordable, fast
            service. We guarantee quality repairs backed by our commitment to
            excellence.
          </p>
          <button>
            <Link
              className="make-appointment-btn"
              to="/make-appointment/first-contact/#topup"
            >
              Make Appointment
            </Link>
          </button>
        </div>
      </div>
      <br />
      <br />

      <div className="">
        <h3 className="our-services" data-aos="fade-down">
          Our Services
        </h3>
        <div className="section-3">
          <div className="section-3-box" data-aos="fade-right">
            <img src={image2} alt="" />
            <div className="section-3-content">
              <div className="">
                <h1>Computer Repair</h1>
                <p>
                  Our computer repair services include everything from basic
                  troubleshooting and system optimization to virus and malware
                  removal. We have years of experience in troubleshooting and
                  resolving computer issues. We provide quick and profession al
                  service so you can get back to what's important in no time.
                </p>
                <button>
                  <Link
                    className="make-appointment-btn"
                    to="/make-appointment/first-contact/#topup"
                  >
                    Make Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="section-3-box" data-aos="fade-down">
            <img src={image4} alt="" />
            <div className="section-3-content">
              <div className="">
                <h1>Liquid Damage Repair</h1>
                <p>
                  Spills happen. Fixing fluid-damaged equipment is one of our
                  specialties. If you suspect an exposure to liquids in your
                  machine, do not delay, turn off,
                </p>
                <button>
                  <Link
                    className="make-appointment-btn"
                    to="/make-appointment/first-contact/#topup"
                  >
                    Make Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="section-3-box" data-aos="fade-right">
            <img src={image6} alt="" />
            <div className="section-3-content">
              <div className="">
                <h1>Custom Build Computers</h1>
                <p>
                  Custom built computer systems are an excellent choice for
                  those who want a powerful and reliable machine that is
                  tailored to their exact specifications. With a custom-built
                  computer, you can enjoy faster speeds, better performance, and
                  the ability to customize it to fit your specific needs. From
                  gaming rigs to multimedia machines, build the perfect computer
                  for your needs today!
                </p>
                <button>
                  <Link
                    className="make-appointment-btn"
                    to="/make-appointment/first-contact/#topup"
                  >
                    Make Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="section-3-box" data-aos="fade-up">
            <img src={image5} alt="" />
            <div className="section-3-content">
              <div className="">
                <h1>Windows installation</h1>
                <p>
                  We are experts in Windows installation and can help you set up
                  your system quickly and easily. Our team of specialists are
                  knowledgeable and experienced, and will be able to provide you
                  with the best quality service. We guarantee satisfaction with
                  our service and a great customer experience. Contact us today
                  to get started!
                </p>
                <button>
                  <Link
                    className="make-appointment-btn"
                    to="/make-appointment/first-contact/#topup"
                  >
                    Make Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews" data-aos="fade-right">
        <Swipper />
      </div>

      <div className="section-5">
        {/* <img src={image7} alt="" /> */}
        <div className="section-5-content">
          <div className="item1" data-aos="fade-down">
            <h6>We Are Here to Help</h6>
            <span></span>
            <br />
            <br />
            <ul>
              <li>
                <i class="fa-regular fa-square-check"></i>
                <div>Walk-ins welcome during all business hours</div>
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                <div>Appointments preferred</div>
              </li>
              <li>
                <i class="fa-regular fa-square-check"></i>
                <div>All Macs and PCs</div>
              </li>
            </ul>
            <br />
            <br />
            <button>
              <Link
                className="make-appointment-btn"
                to="/make-appointment/first-contact/#topup"
              >
                Make Appointment
              </Link>
            </button>
          </div>
          <div className="item2"></div>
        </div>
      </div>

      <div className="section-6" id="aboutUs" data-aos="fade-up">
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
              do, and at the same time let empathy for customers guide how we
              treat people.
            </p>
            <p>
              We have designed a great way of making our customers feel welcome
              here at MTS. One way by which we do this is answering your
              tech-related questions and concerns in the blog section. Another
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
      </div>
    </>
  );
}
