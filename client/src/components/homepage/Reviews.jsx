import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import reviews from "../../review";
// console.log(reviews[0].time);j8ki9lo0p;-'[]

export default function Swipper() {

  // if (window.screen.width <= 425) { 
  //   setSlide(1)
  //  }
  // if (window.screen.width <= 425) { 
  //   setSlide(1)
  //  }


  return (
    <div className="container">
      <h3 style={{textAlign: "center"}}>What our customer's say</h3>
      <hr />
      <Swiper
        spaceBetween={30} 
        slidesPerView={window.screen.width <= 425 ? 1 : 3}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => {
         return <SwiperSlide key={review.id}>
            <div className="review-item">
              <div className="review-text">
                <i className="fa-solid fa-quote-left"></i>
                <p> <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> {review.text}</p>
              </div>
              <div className="review-info"> 
                <div>
                  <img
                    src={review.img}
                    style={{ border: "3px solid white",objectFit: "cover", width: "60px",height: "60px", borderRadius: "60%" }}
                    alt=""
                  />
                </div>
                <div className="name">
                  <span>{review.name}</span><br />
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

// const intervals = [
//   { label: 'year', seconds: 31536000 },
//   { label: 'month', seconds: 2592000 },
//   { label: 'day', seconds: 86400 },
//   { label: 'hour', seconds: 3600 },
//   { label: 'minute', seconds: 60 },
//   { label: 'second', seconds: 1 }
// ];

// function timeSince(date) {
//   const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
//   const interval = intervals.find(i => i.seconds < seconds);
//   const count = Math.floor(seconds / interval.seconds);
//   return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
// }

// https://www.youtube.com/watch?v=ZCvKlyAkjik - instagram clone, ui
