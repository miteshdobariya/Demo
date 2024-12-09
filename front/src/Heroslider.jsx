import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from "react-bootstrap/Button";
import 'animate.css';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './index.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

const Heroslider = () => {
  const options = {
    loop: true,
    margin: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <OwlCarousel className="owl-theme" {...options}>
        <div class="i1">
          <img src="assets/img/newhero1.jpg" alt="slider" />
          <div className="container">
            <div className="inner-slider">
              <div className="info">
                <h4>a perfect and affordable place to stay</h4>
                <h1 className="animate__animated animate__fadeInUpBig">
                <div className="txt">
                  Take advantage of the budget
                  <br />
                  oriented accommodation
                </div>
                </h1>
                {/* <button class="button-69" role="button">shop now</button> */}
                
              </div>
            </div>
          </div>
        </div>
        <div class="i1">
          <img src="assets/img/newhero2.jpg" alt="slider" />
          <div className="container">
            <div className="inner-slider">
              <div className="info ">
                <h4>a perfect and affordable place to stay</h4>
                <div className="txt animate__animated animate__fadeInUpBig animate__delay-2s">
                  Take advantage of the budget
                  <br />
                  oriented accommodation
                </div>
                {/* <button class="button-69" role="button">shop now</button> */}
              </div>
            </div>
          </div>
        </div>
        <div class="i1">
          <img src="assets/img/newhero3.jpg" alt="slider" />
          <div className="container">
            <div className="inner-slider">
              <div className="info">
                <h4>a perfect and affordable place to stay</h4>
                <div className="txt txt animate__animated animate__fadeInUpBig animate__delay-4s">
                  Take advantage of the budget
                  <br />
                  oriented accommodation
                </div>
                {/* <button class="button-69" role="button">shop now</button> */}
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      ;
      {/* <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  );
};
export default Heroslider;
