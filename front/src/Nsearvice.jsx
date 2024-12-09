import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const Nsearvice = () =>{

    Aos.init({
        duration:500,
        offset:200,
    });
    
    return(
        <>
            <div className="nsearvice-main" data-aos="fade-on-left">
                <div className="container">
                    <div className="n-title">
                        what people say
                    </div>
                    <div className="nsearvice-inner">
                        <div className="ncln-outer">
                            <div className="ncln-inner">
                                <a className="img" href="#">
                                    <img src="assets/img/nstaf1.jpg" alt="" />
                                </a>
                                <div className="nsearvice-txt">
                                    <p>I had a fantastic experience at this hostel; I was very impressed with the receptionists and housekeeping staff. Laureen was especially helpful during checking out after a busy week.</p>
                                </div>
                                <div className="nsearvice-name">
                                    <a href="#">jane wood</a>
                                </div>

                            </div>
                        </div>

                        <div className="ncln-outer">
                            <div className="ncln-inner">
                                <a className="img" href="#">
                                    <img src="assets/img/nstaf2.jpg" alt="" />
                                </a>
                                <div className="nsearvice-txt">
                                    <p>The staff was wonderful! We had a very fun time in the city. I can't say enough nice things about the staff. They were all very pleasant and accommodating. We look forward to coming back here again.</p>
                                </div>
                                <div className="nsearvice-name">
                                    <a href="#">Catherine Williams</a>
                                </div>

                            </div>
                        </div>

                        <div className="ncln-outer">
                            <div className="ncln-inner">
                                <a className="img"  href="#">
                                    <img src="assets/img/nstaf3.jpg" alt="" />
                                </a>
                                <div className="nsearvice-txt">
                                    <p>Just want to say thank you and tell you how much my group of young people enjoyed the hostel this week. The staff was so very helpful and friendly. Thank you for all your help and assistance during our stay.</p>
                                </div>
                                <div className="nsearvice-name">
                                    <a href="#">Erica Peterson</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nsearvice;