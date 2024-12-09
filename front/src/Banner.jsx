import React from "react";
const Banner = () => {
  return (
    <>
      <div className="banner-main">
        <div className="banner-inner">
          {/* <div className="img">
            <img src="assets/img/banner.jpg" alt="banner" />
          </div> */}
          <div className="inner-txt">
            <div className="container">
              <div className="txt">
                <h3>
                  <span>Sign Up for 25% Discount</span>
                </h3>
                <p>
                  Want to get an instant discount for your stay at our hostel?
                  Leave your email and sign up for our newsletter with 25% off
                  all our rooms.
                </p>
                <div className="detail">
                  <div className="form">
                    <input type="email" name="email" placeholder="enter your email" />
                    <span className="heading">The text field is required.</span>
                    
                  </div>
                  <div className="banner-btn">
                    <a href="#">subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
