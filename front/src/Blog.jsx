import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Blog = () => {
  const options = {
    loop: true,
    margin: 2,
     autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <>
      <div className="blog-main">
        <div className="container">
          <div className="blog-title">
            <h3>Latest blog posts</h3>
          </div>
          <div className="blog-inner">
            <OwlCarousel className="owl-theme" {...options}>
              <div class="item blog-item">
                <div className="blog-img">
                  <img src="assets/img/blog1.jpg" alt="blog" />
                </div>
                <div className="blog-txt">
                    <h4>
                        <a href="#">
                        Best Days to Stay <br />  in Los Angeles
                        </a>
                    </h4>
                    <div className="time">
                        <time datetime="2023-05-12">May 12, 2023</time>
                    </div>
                    <ul className="blog-icon">
                        <li><a href="#"><TiSocialFacebook className="face"  /></a></li>
                        <li><a href="#"><FaTwitter className="face" /></a></li>
                        <li><a href="#"><FaGooglePlus className="face" /></a></li>
                        <li><a href="#"><FaInstagram className="face" /></a></li>
                    </ul>
                </div>
              </div>
              <div class="item blog-item">
                <div className="blog-img">
                  <img src="assets/img/blog2.jpg" alt="blog" />
                </div>
                <div className="blog-txt">
                    <h4>
                        <a href="#">
                        Best Days to Stay <br />  in Los Angeles
                        </a>
                    </h4>
                    <div className="time">
                        <time datetime="2023-05-12">May 12, 2023</time>
                    </div>
                    <ul className="blog-icon">
                        <li><a href="#"><TiSocialFacebook className="face"  /></a></li>
                        <li><a href="#"><FaTwitter className="face" /></a></li>
                        <li><a href="#"><FaGooglePlus className="face" /></a></li>
                        <li><a href="#"><FaInstagram className="face" /></a></li>
                    </ul>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
