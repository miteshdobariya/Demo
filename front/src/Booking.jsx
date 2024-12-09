// import axios from "axios";
// import React, { useRef } from "react";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// const Booking = () => {
//     const email = useRef();
//     const mobile = useRef();
//     const checkin = useRef()
//     const checkout = useRef()
//     const { id } = useParams();

// const handlebooking=(e)=>{
//     e.preventDefault()
//     var obj = {
//         email: email.current.value,
//         mobile: mobile.current.value,
//         checkin: checkin.current.value,
//         checkout: checkout.current.value,
//     } 


//     axios.post(`http://localhost:9999/booking/${id}`,obj)
//     .then(function (response) {
//       // handle success
//       console.log(response);
//       if(response.data.status == "done")
//       {
//         toast("Success Register");

//         axios.get(`http://localhost:9999/bookingcheck/${id}`,obj)
//         .then(function (response) {
//           // handle success
//           console.log(response);
//           if(response.data.status == "done")
//           {
//             toast("Success Register");
//           }
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         })



//       }
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })

// }


//     return (
//         <>
//         <ToastContainer />
//             <div className="booking-main">
//             <form  method="post" onSubmit={handlebooking}>
//                 <div className="elem-group">
//                     <label htmlFor="name">Your Name</label>
//                     <input type="text" id="name" name="visitor_name" placeholder="John Doe" pattern="[A-Z\sa-z]{3,20}" required />
//                 </div>

//                 <div className="elem-group">
//                     <label htmlFor="email">Your E-mail</label>
//                     <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" ref={email} required />
//                 </div>

//                 <div className="elem-group">
//                     <label htmlFor="phone">Your Phone</label>
//                     <input type="tel" id="phone" name="visitor_phone" placeholder="498-348-3872" pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})" ref={mobile} required />
//                 </div>

//                 <hr />

//                 <div className="elem-group inlined">
//                     <label htmlFor="adult">Adults</label>
//                     <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required />
//                 </div>

//                 <div className="elem-group inlined">
//                     <label htmlFor="child">Children</label>
//                     <input type="number" id="child" name="total_children" placeholder="2" min="0" required />
//                 </div>

//                 <div className="elem-group inlined">
//                     <label htmlFor="checkin-date">Check-in Date</label>
//                     <input type="date" id="checkin-date" name="checkin" ref={checkin} required />
//                 </div>

//                 <div className="elem-group inlined">
//                     <label htmlFor="checkout-date">Check-out Date</label>
//                     <input type="date" id="checkout-date" name="checkout"  ref={checkout} required />
//                 </div>

//                 <div className="elem-group">
//                     <label htmlFor="room-selection">Select Room Preference</label>
//                     <select id="room-selection" name="room_preference" required>
//                         <option value="">Choose a Room from the List</option>
//                         <option value="connecting">Connecting</option>
//                         <option value="adjoining">Adjoining</option>
//                         <option value="adjacent">Adjacent</option>
//                     </select>
//                 </div>

//                 <hr />

//                 <div className="elem-group">
//                     <label htmlFor="message">Anything Else?</label>
//                     <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
//                 </div>

//                 <button type="submit">Book The Rooms</button>
//             </form>
//             </div>
//         </>
//     )
// }
// export default Booking; 



import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loadStripe} from '@stripe/stripe-js';

const Booking = () => {
    // const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const checkin = useRef();
    const checkout = useRef();
    const { id } = useParams();



    const handleBooking = async (e) => {
        e.preventDefault();
        const roomname = localStorage.getItem("roomname");
        const obj = {
            // name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            checkin: checkin.current.value,
            checkout: checkout.current.value,
            roomname: roomname,
        };





      
            // const stripe= await loadStripe("pk_test_51QRaggJWnv0ST1E1ciNuiBUoex8GAzfMGE2T7r9X7FjhU5N45xJBd7Ey5wvPuziDet2XwBPIjH7Cm4lvKOez7deM00SeVJJMqo")

            // const body={

            //     products:obj

            // }

            // const headers={
            //     "Content-Type":"application/json"
            // }
            
            // const response = await fetch("http://localhost:9999/create-checkout",{
            //     method:"POST",
            //     headers:headers,
            //     body:JSON.stringify(body)
            // });

            // const session=await response.json();

            // const result = stripe.redirectToCheckout({
            //     sessionID:session.id
            // });
        


        try {

            if (localStorage.getItem('nameofuser')) {
                console.log("this user is booking")

                const response = await axios.post(`http://localhost:9999/booking/${id}`, obj);

                if (response.data.status === "done") {
                    toast.success("Booking Successful!");

                    try {
                        const checkResponse = await axios.get(`http://localhost:9999/bookingcheck/${id}`);

                        if (checkResponse.data.status === "done") {
                            console.log("Booking details retrieved:", checkResponse.data.data1);
                            toast.success("Booking details retrieved successfully!");
                        }
                    } catch (checkError) {
                        console.error(checkError);
                        toast.error("Failed to retrieve booking details.");
                    }
                }
            }

            else{
                toast.error("enter register email")
            }
        } catch (error) {
            console.error(error.response.data.message);
            toast.error(error.response.data.message);
        }
    };


  

    return (
        <>
            <ToastContainer />
            <div className="booking-main">
                <form method="post" onSubmit={handleBooking}>
                    <div className="elem-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="visitor_name" placeholder="John Doe" pattern="[A-Za-z\s]{3,20}" required />
                    </div>

                    <div className="elem-group">
                        <label htmlFor="email">Your E-mail</label>
                        <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" ref={email} required />
                    </div>

                    <div className="elem-group">
                        <label htmlFor="phone">Your Phone</label>
                        <input type="tel" id="phone" name="visitor_phone" placeholder="498-348-3872" pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})" ref={mobile} required />
                    </div>

                    <hr />

                    <div className="elem-group inlined">
                        <label htmlFor="adult">Adults</label>
                        <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required />
                    </div>

                    <div className="elem-group inlined">
                        <label htmlFor="child">Children</label>
                        <input type="number" id="child" name="total_children" placeholder="2" min="0" required />
                    </div>

                    <div className="elem-group inlined">
                        <label htmlFor="checkin-date">Check-in Date</label>
                        <input type="date" id="checkin-date" name="checkin" ref={checkin} required />
                    </div>

                    <div className="elem-group inlined">
                        <label htmlFor="checkout-date">Check-out Date</label>
                        <input type="date" id="checkout-date" name="checkout" ref={checkout} required />
                    </div>

                  

                    <hr />

                    {/* <div className="elem-group">
                        <label htmlFor="message">Anything Else?</label>
                        <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
                    </div> */}

                    <button type="submit" >Book The Rooms</button>
                </form>
            </div>
        </>
    );
};

export default Booking;
