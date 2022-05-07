import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";

export default function Banner() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide>
          <div style={{backgroundImage: "url('images/banner12.jpg')"}} className="banner">
            <div className="banner-content">
              <div style={{textAlign: "center"}} className="banner-content-text">
                <h1>Phone repair and services</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  nihil quod repellat aliquid accusamus vero eum, animi.
                </span>
                <br />
                <br />
                <button className="btn btn-primary">Make an appointment</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: "url('images/banner13.jpg')"}} className="banner">
            <div className="banner-content">
              <div style={{textAlign: "center"}} className="banner-content-text">
                <h1>Phone repair and services</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  nihil quod repellat aliquid accusamus vero eum, animi.
                </span>
                <br />
                <br />
                <button className="btn btn-primary">Make an appointment</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: "url('images/banner14.jpg')"}} className="banner">
            <div className="banner-content">
              <img src="images/phone.png" alt="" />
              <div style={{textAlign: "center"}} className="banner-content-text">
                <h1>Phone repair and services</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  nihil quod repellat aliquid accusamus vero eum, animi.
                </span>
                <br />
                <br />
                <button className="btn btn-primary">Make an appointment</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

{
  /* <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner">
    <div className="item active">
      <img
        src="images/banner12.jpg"
        alt="Los Angeles"
        style={{ width: "100%" }}
      />
      <div className="carousel-caption">
        <div className="caption-content">
          <img src="images/phone.png" alt="" />
          <div className="">
            <h1>Phone repair and services</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nihil quod repellat aliquid accusamus vero eum, animi, modi
              molestiae nesciunt necessitatibus nam laborum. Saepe blanditiis
              reiciendis repudiandae cum quas, laboriosam itaque deserunt eum
              nisi facilis numquam rem ratione nulla ipsum esse voluptas.
              Accusantium nam optio minus ipsam, consectetur voluptatem ratione!
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="item">
      <div className="bg-color"></div>
      <img src="images/banner13.jpg" alt="Chicago" style={{ width: "100%" }} />
      <div className="carousel-caption">
        <div className="caption-content">
          <img src="images/phone.png" width="100px" height="200px" alt="" />
          <div className=""></div>
          <div className="">
            <h1>Phone repair and services</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nihil quod repellat aliquid accusamus vero eum, animi, modi
              molestiae nesciunt necessitatibus nam laborum. Saepe blanditiis
              reiciendis repudiandae cum quas, laboriosam itaque deserunt eum
              nisi facilis numquam rem ratione nulla ipsum esse voluptas.
              Accusantium nam optio minus ipsam, consectetur voluptatem ratione!
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="item">
      <div className="bg-color"></div>
      <img src="images/banner14.jpg" alt="New York" style={{ width: "100%" }} />
      <div className="carousel-caption">
        <div className="caption-content">
          <img src="images/phone.png" width="100px" height="200px" alt="" />
          <div className=""></div>
          <div className="">
            <h1>Phone repair and services</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nihil quod repellat aliquid accusamus vero eum, animi, modi
              molestiae nesciunt necessitatibus nam laborum. Saepe blanditiis
              reiciendis repudiandae cum quas, laboriosam itaque deserunt eum
              nisi facilis numquam rem ratione nulla ipsum esse voluptas.
              Accusantium nam optio minus ipsam, consectetur voluptatem ratione!
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>; */
}
