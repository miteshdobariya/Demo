import React from "react";
import { IoStar } from "react-icons/io5";
const Room =(w)=>{
    return(
        <>
            <div className="ad-main">
  <div className="container">
    <div className="ad-inner">
      <div className="left">
        <a href="#">
          <img src="w.img" alt="ad" />
        </a>
      </div>
      <div className="right">
        <div className="detail">
          <h5 className="title">
            <a href="#">w.heading</a>
          </h5>
          <div className="rating">
            <div className="star">
              <IoStar className="s" />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <a className="rating-detail" href="#">
              4 customer reviews
            </a>
          </div>
          <p className="ad-txt">
            w.detail
          </p>
          <div className="ad-btn">
            <a href="#">more info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
        </>
    )
}

