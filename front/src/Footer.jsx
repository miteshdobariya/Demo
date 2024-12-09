import React from "react";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLocationArrow } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-cln">
              <div className="cln-inner">
                <h5>Contact us</h5>
                <ul>
                  <li className="f-first">
                    <div className="icon">
                      <IoCall className="footer-icon" />
                    </div>
                    <div className="f-txt">
                      <a href="tel:#">+1 323-913-4688</a>
                    </div>
                  </li>
                  <li className="f-first">
                    <div className="icon">
                      <FaEnvelope className="footer-icon" />
                    </div>
                    <div className="f-txt">
                      <a href="mailto:#">info@demolink.org</a>
                    </div>
                  </li>
                  <li className="f-first">
                    <div className="icon">
                      <FaLocationArrow className="footer-icon" />
                    </div>
                    <div className="f-txt">
                      <a href="#">
                        4730 Crystal Springs Dr,
                        <br /> Los Angeles, CA 90027
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-cln">
              <div className="cln-inner">
                <h5>Popular news</h5>
                <ul>
                  <li className="f-second">
                    <a href="#">
                      Hostel or Hotel: What to <br /> Choose and Why
                    </a>
                    <span>
                      <time datetime="2023-05-04">may 04,2023</time>
                    </span>
                  </li>
                  <li className="f-second">
                    <a href="#">
                      Our Guide for Travelers on <br />a Budget
                    </a>
                    <span>
                      <time datetime="2023-05-04">may 04,2023</time>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-cln">
              <div className="cln-inner">
                <h5>Quick links</h5>
                <ul className="third">
                  <div className="third-one">
                    <li className="f-third">
                      <a href="#">About Us</a>
                    </li>
                    <li className="f-third">
                      <a href="#">our rooms</a>
                    </li>
                    <li className="f-third f-t">
                      <a href="#">our team</a>
                    </li>
                  </div>
                  <div className="third-one">
                    {" "}
                    <li className="f-third">
                      <a href="#">blog</a>
                    </li>
                    <li className="f-third">
                      <a href="#">gallary</a>
                    </li>
                  </div>
                </ul>
                <div className="footer-btn">
                  <div className="f-btn1 f-h1">
                    <a href="#">book now</a>
                  </div>
                  <div className="f-btn1 f-btn2">
                    <a href="#">get in touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar-main">
        <div className="container">
          <div className="bar-inner">
            <div className="footer-bar-cln">
              <p>@ 2024 visit Hostel.all rights reserved</p>
            </div>

            <div className="footer-bar-cln">
              <ul className="bar-icon">
                <li>
                  <a href="#">
                    <TiSocialFacebook className="bar-i" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoTwitter className="bar-i" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePlusG className="bar-i" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineInstagram className="bar-i" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-bar-cln">
                    <p>
                        <a href="#">Privacy Policy</a>
                    </p>
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Footer;
