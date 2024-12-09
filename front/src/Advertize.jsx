import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Advertize = () => {
    Aos.init({
        duration: 500,
    });
    const Navigate = useNavigate();
    // useEffect(()=>{
    //     localStorage.clear();
    // })
    const register=(e)=>{

        var id = e.currentTarget.getAttribute("data-id");
        var roomname=e.currentTarget.getAttribute("name");
        localStorage.setItem("roomname",roomname);

        e.preventDefault();
        Navigate("/roomdetail/"+id);
        // localStorage.setItem('id',id);

    }


    const [data, setdata] = useState([])
    useEffect(() => {
      axios.get('http://localhost:9999/getroom')
        .then(function (response) {
         
          setdata(response.data.data)
  
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, [])

    return (
        <>
            {
                data.slice(0, 4).map((i)=>{
                    return(
                        <>
                            <div className="ad-main" data-aos="fade-up-left">
                <div className="container ad-sub">
                    <div className="ad-inner">
                        <div className="left">
                            <a href="#">
                                <img src={`http://localhost:9999/images/${i.image}`}  alt="ad" />
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
                                {/* <div className="ad-btn">
                                    <a href="#">more info</a></div> */}

                                <button className="ad-btn" onClick={register} data-id={i._id} name={i.name}>more info</button>

                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default Advertize;








