import React, { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const Mamber = () => {

    Aos.init({
        duration: 500,
        offset:300,
    });


    // const [demo , setdemo] = useState("heiiiiii");
    // const text1= () =>{
    //     setdemo("hiiiiii")
    // }
    // const text2= () =>{
    //     setdemo("hiiiiii2")
    // }
    // const text3= () =>{
    //     setdemo("hiiiiii3")
    // }
    return (
        <>
            <div className="staf-main">
                <div className="container">
                    <div className="staf-inner">
                        <div className="staf-title">
                            <h3>
                                our team
                            </h3>
                        </div>
                        <div className="staf-detail">
                            <div className="cln-out" data-aos="fade-in-left">
                                <div className="cln-inner">
                                    <div className="staf-pic">
                                        <img src="assets/img/staf1.jpg" alt="" />
                                    </div>
                                    <div className="staf-info">
                                        <div className="name">
                                            <a href="#">Sam Robinson</a>
                                            <a href="#"></a>
                                        </div>
                                        <div className="post">
                                            <p>Founder</p>
                                        </div>
                                        <div className="num">
                                            <a href="tel:#">+1 323-913-4688</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cln-out" data-aos="fade-in-left">
                                <div className="cln-inner">
                                    <div className="staf-pic">
                                        <img src="assets/img/staf2.jpg" alt="" />
                                    </div>
                                    <div className="staf-info">
                                        <div className="name">
                                            <a href="#">Sam Robinson</a>
                                        </div>
                                        <div className="post">
                                            <p>Founder</p>
                                        </div>
                                        <div className="num">
                                            <a href="tel:#">+1 323-913-4688</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cln-out" data-aos="fade-in-left">
                                <div className="cln-inner">
                                    <div className="staf-pic">
                                        <img src="assets/img/staf3.jpg" className="img1" alt="" />
                                    </div>
                                    <div className="staf-info">
                                        <div className="name">
                                            <a href="#">Sam Robinson</a>
                                        </div>
                                        <div className="post">
                                            <p>Founder</p>
                                        </div>
                                        <div className="num">
                                            <a href="tel:#">+1 323-913-4688</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cln-out" data-aos="fade-in-left">
                                <div className="cln-inner">
                                    <div className="staf-pic">
                                        <img src="assets/img/staf4.jpg" alt="" />
                                    </div>
                                    <div className="staf-info">
                                        <div className="name">
                                            <a href="#">Sam Robinson</a>
                                        </div>
                                        <div className="post">
                                            <p>Founder</p>
                                        </div>
                                        <div className="num">
                                            <a href="tel:#">+1 323-913-4688</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <h1>{demo}</h1>
        <button type="button" onClick={text1}>b1</button>
        <button type="button" onClick={text2}>b2</button>
        <button type="button" onClick={text3}>b3</button> */}

        </>
    )
}
export default Mamber;