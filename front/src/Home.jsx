import React from "react";
import { MdHexagon } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiHome } from "react-icons/ci";

const Home = (w) => {
  return (
    <>
      <div className="cln-outer">
        <div className="cln-inner">
          <div className="icon">
            <span>{w.img}</span>
            <div className="hexagon">
              <MdHexagon />
            </div>
          </div>
          <div className="title">
            <a href="#">{w.heading}</a>
          </div>
          <div className="bar"></div>
          <div className="s-detail">
            <p>{w.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
