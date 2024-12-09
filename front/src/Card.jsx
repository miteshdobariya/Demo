import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import Aos from "aos";
import 'aos/dist/aos.css'
const Card = () => {
  const [data , setdata] = useState(1)
  const onChange = (key) => {
    console.log(key);
    setdata(key)
  };

      Aos.init({
        duration:500
      });
  const items = [
    {
      key: "1",
      label: "about us",
      children: "Our hostel was founded in 2008 to provide travelers on abudget from all over the world with affordable yet highly comfortable accommodation that they could enjoy.",


    },
    {
      key: "2",
      label: "why choose us",
      children: "We are one of the most popular hostels for the guests of our city. Our hostel was awarded the “Best US Hostel” in 2023 for the unique approach to our clients and visitors.",
    },
    {
      key: "3",
      label: "our mission",
      children: " Our mission is to promote a dynamic community of global citizens who have the wisdom and humanity to actively make the world a better place for everyone.",


    },
  ];
  return (
    <>
      

      

<div className="card-main">
        <div className="container">
          <div className="card-inner">
            <div className="card-cln cln-lft" data-aos="fade-right">
              <img src="assets/img/product.jpg" alt="img" />
            </div>
            <div className="card-cln cln-right" data-aos="fade-left">
              <div className="title">
                <h3>best city hostel</h3>
              </div>
              {/* bootstrap code nav */}
              {/* <div className="card-detail">
                <Tabs
                  defaultActiveKey="profile"
                  id="fill-tab-example"
                  className="mb-3 "
                  fill
                >
                  <Tab eventKey="home" title="about us">
                    <p>
                      Our hostel was founded in 2008 to provide travelers on a
                      budget from all over the world with affordable yet highly
                      comfortable accommodation that they could enjoy.
                    </p>
                    <div className="nav-button">
                    <div className="button1">
                      <a href="#">get in touch</a>
                    </div>

                    <div className="button2">
                      <a href="#">read more about us</a>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="why choose us">
                    <p>
                      We are one of the most popular hostels for the guests of
                      our city. Our hostel was awarded the “Best US Hostel” in
                      2023 for the unique approach to our clients and visitors.
                    </p>
                    <div className="nav-button">
                    <div className="button1">
                      <a href="#">get in touch</a>
                    </div>

                    <div className="button2">
                      <a href="#">read more about us</a>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="longer-tab" title="our mission">
                    <p>
                      Our mission is to promote a dynamic community of global
                      citizens who have the wisdom and humanity to actively make
                      the world a better place for everyone.
                    </p>
                    <div className="nav-button">
                    <div className="button1">
                      <a href="#">get in touch</a>
                    </div>

                    <div className="button2">
                      <a href="#">read more about us</a>
                    </div>
                    </div>
                  </Tab>
                </Tabs>
              </div> */}

              <div className="card-detail">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              </div>
                {data == '1' ?  <div className="nav-button">
                    <div className="button1">
                      <a href="#">get in touch</a>
                    </div>

                    <div className="button2">
                      <a href="#">read more about us</a>
                    </div>
                    </div>:""}

                    {data == '2' ?  <div className="nav-button">
                    <div className="button1">
                      <a href="#">get in touch</a>
                    </div>

                    <div className="button2">
                      <a href="#">read more about us</a>
                    </div>
                    </div>:""}

                    {data == '3' ?  <div className="nav-button">
                    <div className="button1">
                      <a href="#">get in touch</a>
                    </div>

                    <div className="button2">
                      <a href="#">read more about us</a>
                    </div>
                    </div>:""}
              {/* end of nav */}
            </div>
          </div>
        </div>
      </div>


    </>
  );
};
export default Card;
