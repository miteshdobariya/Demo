import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import axios from "axios";
const Roominner = () => {
  const Navigate = useNavigate();
  const register=(e)=>{

    var id = e.currentTarget.getAttribute("data-id");

    e.preventDefault();
    Navigate("/roomdetail/"+id);
    // localStorage.setItem('id',id);

}

  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:9999/getroom')
      .then(function (response) {
        console.log(response.data.data);

        setdata(response.data.data)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])


  return (
    <>
       <Header />
      <div className="room-main">
      <div className="room-inner">
                  <div className="room-img">
                    <img src="assets/img/room1.jpg" alt="room" />

                    <div className="room-txt">
                      <h2>rooms</h2>
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

                <div className="room-title">
                    <h2>our rooms</h2>
                  </div>
      </div>

      {
        data.map((i) => {
          return (
            <>
              <div className="room-main">
                
                <div className="container">
                  
                  <div className="room1">
                    {/* <Room heading={'double room (private)'} img={'assets/img/ad1.jpg'} detail={'Double room is one of the most popular choices at Visit Hostel. It includes one double bed with comfortable mattresses and bed linen, WC,and a TV set.'}/> */}
                    <div className="ad-main">
                      <div className="container">
                        <div className="ad-inner">
                          <div className="left">
                            <a href="#">
                              <img src={`http://localhost:9999/images/${i.image}`} />
                            </a>
                          </div>
                          <div className="right">
                            <div className="detail">
                              <h5 className="title">
                                <a href="#">{i.name}</a>
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
                              {i.detail}
                              </p>
                              <div className="ad-btn" onClick={register} data-id={i._id}>
                                <a href="#">more info</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="ad-inner">
                  <div className="left">
                    <a href="#">
                      <img src="assets/img/ad2.jpg" alt="ad" />
                    </a>
                  </div>
                  <div className="right">
                    <div className="detail">
                      <h5 className="title">
                        <a href="#">double room (private)</a>
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
                        Double room is one of the most popular choices at Visit
                        Hostel. It includes one double bed with comfortable
                        mattresses and bed linen, WC,and a TV set.
                      </p>
                      <div className="ad-btn">
                        <a href="#">more info</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ad-inner">
                  <div className="left">
                    <a href="#">
                      <img src="assets/img/ad3.jpg" alt="ad" />
                    </a>
                  </div>
                  <div className="right">
                    <div className="detail">
                      <h5 className="title">
                        <a href="#">double room (private)</a>
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
                        Double room is one of the most popular choices at Visit
                        Hostel. It includes one double bed with comfortable
                        mattresses and bed linen, WC,and a TV set.
                      </p>
                      <div className="ad-btn">
                        <a href="#">more info</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ad-inner">
                  <div className="left">
                    <a href="#">
                      <img src="assets/img/ad4.jpg" alt="ad" />
                    </a>
                  </div>
                  <div className="right">
                    <div className="detail">
                      <h5 className="title">
                        <a href="#">double room (private)</a>
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
                        Double room is one of the most popular choices at Visit
                        Hostel. It includes one double bed with comfortable
                        mattresses and bed linen, WC,and a TV set.
                      </p>
                      <div className="ad-btn">
                        <a href="#">more info</a>
                      </div>
                    </div>
                  </div>
                </div> */}
                      </div>
                    </div>
                    ;
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
      <Footer />
    </>
  );
};
export default Roominner;
