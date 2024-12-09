import React, { useRef } from "react";
import { ToastContainer , toast} from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Forgot=()=>{
    const Navigate = useNavigate();
    const email = useRef();
    const sendotp=(e)=>{
        e.preventDefault();
        console.log(email);

        var obj={
            email:email.current.value,
         }

         axios.post('http://localhost:9999/forgot',obj)
         .then(function (response) {
           // handle success
           
         
           if(response.data.status == "done")
           {
             toast("Success Register");
             Navigate('/otp', { state: { email: email.current.value } });
             

           }
         })
         .catch(function (error) {
           // handle error
           console.log(error.response.data);
         })

    }
    return(
        <>
            <Header/>
             <ToastContainer />
                <div className="forgot-password-container">
                    <h2>Forgot Your Password?</h2>
                    <p>Enter your email address to reset your password.</p>
                    <form class="forgot-password-form" action="/reset-password" method="POST" onSubmit={sendotp}>
                        <input type="email" name="email" placeholder="Enter your email" ref={email} required/>
                        <button type="submit">Reset Password</button>
                    </form>
                </div>


        </>
    )
}
export default Forgot;