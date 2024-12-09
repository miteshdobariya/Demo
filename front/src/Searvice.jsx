import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { CiMap } from "react-icons/ci";

import Home from "./Home";
const Searvice=()=>{
    return(
        <>
        <div className="service-main">
            <div className="container">
                <div className="service-inner">
                    {/* <div className="cln-outer">
                        <div className="cln-inner">
                            <div className="icon">
                            <i class="fa-regular fa-map"></i>
                            <div className="hexagon"><MdHexagon/></div>
                            </div>
                            <div className="title">
                            <a href="#">Map & Directions</a>
                            </div>
                            <div className="bar">

                            </div>
                            <div className="s-detail">
                                <p>
                                Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cln-outer">
                        <div className="cln-inner">
                            <div className="icon">
                            <CiHome />
                            <div className="hexagon"><MdHexagon/></div>
                            </div>
                            <div className="title">
                                <a href="#">accommodation services</a>
                            </div>
                            <div className="bar">

                            </div>
                            <div className="s-detail">
                                <p>
                                Visit Hostel provides high-quality accommodation services to clients that come to our city from all over the world throughout the year.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cln-outer">
                        <div className="cln-inner">
                            <div className="icon">
                            <FaRegStar />
                            <div className="hexagon"><MdHexagon/></div>
                            </div>
                            <div className="title">
                            <a href="#">great experience</a>
                            </div>
                            <div className="bar">
                                

                            </div>
                            <div className="s-detail">
                                <p>
                                With qualified and friendly staff and high level of comfort, we are sure you will have a great experience of staying at the Visit Hostel.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <Home heading={'Map & Directions'} img={<CiMap />}  content={'   Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.'}/>
                    <Home heading={'accommodation services'} img={<CiHome  />} content={'  Visit Hostel provides high-quality accommodation services to clients that come to our city from all over the world throughout the year.'}/>
                    <Home  img={<FaRegStar />} heading={'accommodation services'} content={'   Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.'}/>
                </div>
            </div>
        </div>
       </>
    )
}
export default Searvice