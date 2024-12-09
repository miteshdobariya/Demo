import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const Classic = () => {
  return (
    <>
    <Header/>
      <div className="classic-main">
        <div className="room-main">
          <div className="room-inner">
            <div className="room-img">
              <img src="assets/img/about.jpg" alt="room" />

              <div className="room-txt">
                <h2>classic blog</h2>
                <ul>
                  <li>
                    <Link className="link" to={"/home"}>
                      home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link className="link" to={"/Classic"}>
                      blog
                    </Link>
                  </li>
                  <li>/</li>
                  <li>classic blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <div className="bottom-inner">
              <div className="classic-cln">
                <div className="classic-data">
                  <h4>
                    <a href="#">How to Save a Lot When Traveling Worldwide</a>
                  </h4>
                  <div className="panel">
                    <a href="#" className="news">
                      news
                    </a>
                    <div className="commant">
                      <span>
                        <FaComments className="i" />
                      </span>
                      <a href="#">14</a>
                    </div>

                    <div className="time">
                      <span>
                        <CiClock2 className="i" />
                      </span>
                      <time datetime="2023-11-30">nov 30, 2023</time>
                    </div>
                    <div className="author">
                      by
                      <a href="#">gavin bell</a>
                    </div>
                  </div>

                  <a href="#" className="img">
                    <img src="assets/img/class1.jpg" alt="" />
                  </a>
                </div>

                <div className="classic-data">
                  <h4>
                    <a href="#">How to Save a Lot When Traveling Worldwide</a>
                  </h4>
                  <div className="panel">
                    <a href="#" className="news">
                      news
                    </a>
                    <div className="commant">
                      <span>
                        <FaComments className="i" />
                      </span>
                      <a href="#">14</a>
                    </div>

                    <div className="time">
                      <span>
                        <CiClock2 className="i" />
                      </span>
                      <time datetime="2023-11-30">nov 30, 2023</time>
                    </div>
                    <div className="author">
                      by
                      <a href="#">gavin bell</a>
                    </div>
                  </div>

                  <a href="#" className="img">
                    <img src="assets/img/class2.jpg" alt="" />
                  </a>
                </div>

                <div className="classic-data">
                  <h4>
                    <a href="#">How to Save a Lot When Traveling Worldwide</a>
                  </h4>
                  <div className="panel">
                    <a href="#" className="news">
                      news
                    </a>
                    <div className="commant">
                      <span>
                        <FaComments className="i" />
                      </span>
                      <a href="#">14</a>
                    </div>

                    <div className="time">
                      <span>
                        <CiClock2 className="i" />
                      </span>
                      <time datetime="2023-11-30">nov 30, 2023</time>
                    </div>
                    <div className="author">
                      by
                      <a href="#">gavin bell</a>
                    </div>
                  </div>

                  <a href="#" className="img">
                    <img src="assets/img/class3.jpg" alt="" />
                  </a>
                </div>

                <div className="classic-data">
                  <h4>
                    <a href="#">How to Save a Lot When Traveling Worldwide</a>
                  </h4>
                  <div className="panel">
                    <a href="#" className="news">
                      news
                    </a>
                    <div className="commant">
                      <span>
                        <FaComments className="i" />
                      </span>
                      <a href="#">14</a>
                    </div>

                    <div className="time">
                      <span>
                        <CiClock2 className="i" />
                      </span>
                      <time datetime="2023-11-30">nov 30, 2023</time>
                    </div>
                    <div className="author">
                      by
                      <a href="#">gavin bell</a>
                    </div>
                  </div>

                  <a href="#" className="img img4">
                    <div className="sub-left col">
                      <img src="assets/img/class4.jpg" alt="" />
                    </div>
                    <div className="sub-img col">
                      <div className="sub-up image-up">
                        <img src="assets/img/class4a.jpg" alt="" />
                      </div>
                      <div className="sub-up">
                        <img src="assets/img/class4b.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="classic-cln1">
                <div className="bar">
                  <form action="" method="get">
                    <div className="form-wrap">
                      <label htmlFor="search-form" className="lable">
                        Search the blog...
                      </label>
                      <input type="text" autoComplete="off" />
                      <button type="submit">
                        <CiSearch />
                      </button>
                    </div>
                  </form>
                </div>

                <div className="classic-item">
                  <h5>Categories</h5>
                  <div className="item">
                    <ul>
                      <li className="item1">
                        <a href="#">See All</a>
                      </li>
                      <li>
                        <a href="#">hostel</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">rooms</a>
                      </li>
                      <li>
                        <a href="#">amenities</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="classic-item">
                  <h5>Popular posts</h5>
                  <div className="item">
                    <div className="artical">
                      <a href="#" className="artical-img">
                        <img src="assets/img/artical1.jpg" alt="" />
                      </a>
                      <div className="p">
                        <a href="#">
                          5 Amenities That Every Hostel Should Have
                        </a>
                      </div>
                    </div>
                    <div className="artical a1">
                      <a href="#" className="artical-img">
                        <img src="assets/img/artical2.jpg" alt="" />
                      </a>
                      <div className="p">
                        <a href="#">
                        A Perfect Hostel: Does it Exist?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="classic-item">
                  <h5>Comments</h5>
                  <div className="item">
                    <div className="comments-data">
                      <div className="c-up">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                      </div>
                      <div className="c-down">
                      Jessica Brown on
                      <span>10 Tips on Choosing a Hostel</span>
                      </div>
                    </div>
                    <div className="comments-data c-data">
                      <div className="c-up">
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
                      </div>
                      <div className="c-down">
                      Adam Williams on
                      <span>Popular Hostels in Europe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Classic;
