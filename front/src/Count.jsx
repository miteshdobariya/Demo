import React from "react";
import CountUp from 'react-countup';
import Aos from "aos";
import 'aos/dist/aos.css'
const Count= () =>{

    Aos.init({
        duration:500,
      });

    return(
        <>
            <div className="count-main">
                <div className="container">
                    <div className="count-title">
                        <h3>more than 10 years of Following the dream</h3>
                    </div>
                    <div className="count-inner" data-aos="fade-up">
                        <div className="box">
                            <div className="box1">
                                 <CountUp end={12} start={0.000} />
                                 <div className="c-bar"></div>
                                 <p>awards</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box1">
                                 <CountUp end={650} />
                                 <div className="c-bar"></div>
                                 <p>guests</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box1">
                                 <div className="txt">
                                 <CountUp end={1} /><span>k</span>
                                 <div className="c-bar"></div>
                                 <p>cups of coffee</p>
                                 </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Count;