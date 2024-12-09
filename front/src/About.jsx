import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


const About = () => {
  return (
    <>
     <Header />
      <div className="room-main">
        <div className="room-inner">
          <div className="room-img">
            <img src="assets/img/about.jpg" alt="room" />

            <div className="room-txt">
              <h2>about us</h2>
              <ul>
                <li>
                  <Link className="link" to={"/home"}>
                    home
                  </Link>
                </li>
                <li>/</li>
                <li>rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </>
    
  );
};
export default About;
