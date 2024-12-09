import innerroom1 from "./assets/img/innerroom1.jpg";
import innerroom2 from "./assets/img/innerroom2.jpg";
import innerroom3 from "./assets/img/innerroom3.jpg";

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { FaLock } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { MdFreeCancellation } from "react-icons/md";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Booking from "./Booking";
const Roomdetail = () => {



    const [data, setdata] = useState([])
    const Navigate=useNavigate();

    const { id } = useParams()
    useEffect(() => {

        fetch();
       
           
    }, [id])
    const fetch=async()=>{
        // axios.get(`http://localhost:9999/getroomdetail/${id}`)
 
        //  .then(function (response) {
        //      console.log(response.data.data);
 
        //      setdata(response.data.data);
 
        //  })
        //  .catch(function (error) {
        //      // handle error
        //      console.log(error);
        //  })


         try {
            const response = await axios.get(`http://localhost:9999/getroomdetail/${id}`);
            setdata(response.data.data);
          } catch (error) {
            console.error('Error fetching room data:', error);
            
          }

        }

   


const booking=()=>{
    Navigate(`/booking/${id}`)
}

    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <>

            <div className="inner-page">
                <div className="inner-page-main">
                    <div className="container">
                        <div className="inner-page-in">
                            <div className="cln">
                                <div className="main-img">

                                    <img src={`http://localhost:9999/images/${data.image}`} />


                                    <div className="img-txt">
                                        {data.name}
                                    </div>
                                </div>
                                {/* OwlCarousel for sliding room images */}
                                <OwlCarousel className="owl-theme" {...options}>
                                    <div className="item">
                                        <img src={innerroom2} alt="Room View" />
                                    </div>
                                    <div className="item">
                                        <img src={innerroom1} alt="Room Interior" />
                                    </div>
                                    <div className="item">
                                        <img src={innerroom3} alt="Luxury Bathroom" />
                                    </div>
                               
                                </OwlCarousel>

                                <div className="all-product">
                                    <div className="block">
                                        <span className="item">
                                            <div className="icon"><FaLock /></div>
                                        </span>
                                        <div className="block-title">
                                            <span>Security Policy</span>
                                            <p>Your booking is secure and protected.</p>
                                        </div>
                                    </div>

                                    <div className="block">
                                        <span className="item">
                                            <div className="icon"><CiCreditCard1 /></div>
                                        </span>
                                        <div className="block-title">
                                            <span>Payment Policy</span>
                                            <p>We accept all major credit cards.</p>
                                        </div>
                                    </div>

                                    <div className="block">
                                        <span className="item">
                                            <div className="icon"><MdFreeCancellation /></div>
                                        </span>
                                        <div className="block-title">
                                            <span>Cancellation Policy</span>
                                            <p>Free cancellation up to 24 hours before check-in.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="cln cln2">
                                <div className="title">
                                    <h2>{data.name}</h2>
                                    <strong>$150.00 per night</strong>
                                </div>

                                <div className="product-detail">
                                    <div className="product-description">
                                        <p>{data.detail}</p>
                                        <ul>
                                            <li>Room Size: 35m²</li>
                                            <li>King-size Bed</li>
                                            <li>Private Balcony with City View</li>
                                            <li>Complimentary Breakfast</li>
                                            <li>Free Wi-Fi and Flat-screen TV</li>
                                            <li>Ensuite Bathroom with Rain Shower</li>
                                        </ul>
                                    </div>

                                    <div className="product-action">
                                        <div className="product-addto-cart">
                                            <form method="post">
                                                <a className="action-button" href="#" onClick={booking}>Book Now</a>
                                            </form>
                                        </div>

                                        <div className="product-additional-info">
                                            <div className="product-qty">
                                                <div className="txt">
                                                    Limited availability! Only <span>3</span> rooms left.
                                                </div>
                                                <div className="bar-block">
                                                    <div className="bar">
                                                        <span className="inner-bar"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="shipping">
                                                <div className="icon">
                                                    <i className="fa-sharp fa-regular fa-truck-fast"></i>
                                                </div>
                                                <div className="i-txt">
                                                    <span>Free cancellation within 24 hours</span>
                                                    <span>Check-in Date: March 5, 2024</span>
                                                </div>
                                            </div>

                                            <div className="social">
                                                <span>share</span>
                                                <ul>
                                                    <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                    <li><a href="https://twitter.com/intent/tweet?text=Check+out+this+Deluxe+Room+at+our+hotel https://hotelwebsite.com"><i className="fa-brands fa-twitter"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/pin/create/button/?media=https://hotelwebsite.com/room.jpg&url=https://hotelwebsite.com"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                                </ul>
                                            </div>


                                        </div>
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

export default Roomdetail;






