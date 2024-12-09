import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const loginStatus = localStorage.getItem('loginnn');
  //   if (loginStatus) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.clear();
    navigate("/login")
  }
  



  return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <img src="assets/img/logo.png" alt="logo" />
            </div>
            <div className="bar">
              <ul className="detail">
                <li className="cln">
                  <div className="cln-detail">
                    <div className="item">
                      <span className="fa-regular fa-clock"></span>
                    </div>

                    <div className="item1">
                      <p>
                        09:00
                        <span>am</span>
                        -05:00
                        <span>pm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="cln cl">
                  <div className="cln-detail ">
                    <div className="item">
                      <span className="fa-solid fa-phone icon"></span>
                    </div>

                    <div className="item1">
                      <p>
                        <a href="tel:#">+1 323-913-4688</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              {/* <a className="btn btn1 btn2" href="#">
                book now{" "}
              </a> */}



                {
                  localStorage.getItem("loginnn") && 
                  
                  <Link className="btn-login"  onClick={handleLogout}>Logout</Link>

                }
                {
                  !localStorage.getItem("loginnn") && 
                  
                  <Link className="btn-login" to={"/login"}>Login</Link>
                  
                }
                {
                   localStorage.getItem("loginnn") &&  <p className="btn-login-user">{localStorage.getItem('nameofuser')}<span><FaUserCheck /></span></p>

                }

            </div>
          </div>
        </div>
      </div>

      {/* innerr header bar */}

      <div className="header-bottom-main">
        <div className="container">
          <div className="header-bottom-inner">
            <ul className="list-data cln">
              <li className="item">
                <Link to={"/home"}>Home</Link>
              </li>
              <li className="item">
                <Link to={"/about"}>about us</Link>
              </li>
              <li className="item">
                <Link to={"/Roominner"}>rooms</Link>
                <ul className="sub-list">
                  <li>
                    <a href="#">Double Room</a>
                  </li>
                </ul>
              </li>
              <li className="item">
                <Link to={"/Classic"}>blog</Link>
                <ul className="sub-list s1">
                  <li>
                    <a href="#">classic blog</a>
                  </li>
                  <li>
                    <a href="#">grid blog</a>
                  </li>
                  <li>
                    <a href="#">grid blog 2</a>
                  </li>
                  <li>
                    <a href="#">grid blog 3</a>
                  </li>
                  <li>
                    <a href="#">blog post</a>
                  </li>
                </ul>
              </li>
              <li className="item">
                <a href="#">contact us</a>
              </li>
              <li className="item">
                <Link to={"/roominsert"}>page</Link>
              </li>
            </ul>
            <ul className="list-data cln">
              <li className="item">
                <a href="#">
                  <i class="fa-brands fa-facebook-f icon1"></i>
                </a>
              </li>
              <li className="item">
                <a href="#">

                  <i class="fa-brands fa-twitter icon1"></i>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <i class="fa-brands fa-google-plus-g icon1"></i>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <i class="fa-brands fa-instagram icon1"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </>
  );
};
export default Header;
