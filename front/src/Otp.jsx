
import React, { useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Header";
const Otp = () => {
    const Navigate = useNavigate();
    const otp = useRef();
    const password = useRef();
    const newpassword = useRef();

    const checkotp = (e) => {
        e.preventDefault();

        var obj = {
            otp: otp.current.value,
            password: password.current.value,
            newpassword: newpassword.current.value,
        }

        axios.patch('http://localhost:9999/checkotp', obj)
            .then(function (response) {
                // handle success
                if(response.data.status == "done")
                {
                    toast("Your password has sucessfully updated")
                    toast(response.data.status)
                    Navigate("/")
                }
                

            })
            .catch(function (error) {
                // handle error
                toast(error.response.data.status)
                Navigate("/")
            })

    }


    return (
        <>
            <Header/>
            <ToastContainer />
           <div className="main-otp">
           <div className="reset-password-container">
                <h2>Reset Your Password</h2>
                <p>Enter the OTP sent to your email, then set your new password.</p>
                <form class="reset-password-form" method="POST" onSubmit={checkotp}>
                    <div class="form-group">
                        <label for="otp">Enter OTP</label>
                        <input type="text" id="otp" name="otp" placeholder="Enter OTP" ref={otp} required />
                    </div>
                    <div class="form-group">
                        <label for="new-password">New Password</label>
                        <input type="password" id="new-password" name="new-password" placeholder="Enter new password" ref={password} required />
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm new password" ref={newpassword} required />
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
            </div>
           </div>
        </>
    )
}
export default Otp;











