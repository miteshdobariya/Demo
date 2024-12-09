import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GoZoomIn } from "react-icons/go";
import { Navigation } from "swiper/modules";
const Footerslider = () => {
    const options = {
        loop: true,
        margin: 5,
        nav: true,
         autoplay: false,
        autoplayTimeout: 2000,
        autoplaySpeed: 800,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 5,
          },
          1000: {
            items: 5,
          },
        },
      };
  return (
    <>
      <div className="slider-main">
        <div className="slider-inner">
          <div className="s-title">
          <h6 className="slider-title">Gallery</h6>
          </div>
          <div className="slider">
            <OwlCarousel className="owl-theme" {...options}>
              <div class="item">

                <div className="s-img">
                    <img src="assets/img/fs1.jpg" alt="demo" />
                </div>
                <div className="slider-icon">
                    <a href="#"><GoZoomIn /></a>
                </div>
              </div>
              <div class="item">

                <div className="s-img">
                    <img src="assets/img/fs2.jpg" alt="demo" />
                </div>
                <div className="slider-icon">
                    <a href="#"><GoZoomIn /></a>
                </div>
              </div>
              <div class="item">

                <div className="s-img">
                    <img src="assets/img/fs3.jpg" alt="demo" />
                </div>
                <div className="slider-icon">
                    <a href="#"><GoZoomIn /></a>
                </div>
              </div>
              <div class="item">

                <div className="s-img">
                    <img src="assets/img/fs4.jpg" alt="demo" />
                </div>
                <div className="slider-icon">
                    <a href="#"><GoZoomIn /></a>
                </div>
              </div>
              <div class="item">

                <div className="s-img">
                    <img src="assets/img/fs5.jpg" alt="demo" />
                </div>
                <div className="slider-icon">
                    <a href="#"><GoZoomIn /></a>
                </div>
              </div>
              <div class="item">

                <div className="s-img">
                    <img src="assets/img/fs66.jpg" alt="demo" />
                </div>
                <div className="slider-icon">
                    <a href="#"><GoZoomIn /></a>
                </div>
              </div>
              <div class="item">

                <div className="s-img">
                    <img src="assets/img/fs7.jpg" alt="demo" />
                </div>
                <div className="slider-icon">
                    <a href="#"><GoZoomIn /></a>
                </div>
              </div>
              
            </OwlCarousel>
            ;
          </div>
        </div>
      </div>
    </>
  );
};
export default Footerslider;
