import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Roominsert = () => {




    const name = useRef();
    const detail = useRef();
    const image = useRef();
    const Navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();

        const params = new FormData()
        // console.log();

        params.set("name", name.current.value)
        params.set("detail", detail.current.value)
        params.set("image", image.current.files[0])

        axios.post('http://localhost:9999/addroom', params)
            .then(function (response) {
                if (response.data.status == "done") {
                    toast("Success Register");
                    Navigate("/roominner");
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    return (
        <>
             <Header/>
            <ToastContainer />
            <div className="signup-main">
                <div className="container">
                    <h1>Insert Image</h1>
                    <form onSubmit={register}>
                        <label htmlFor="username">Name:</label>
                        <input type="text" ref={name} />

                        <label htmlFor="username">Detail:</label>
                        <input type="text" ref={detail} />

                        <label htmlFor="username">image:</label>
                        <input type="file" ref={image} />


                        <button className="sign-button"    type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Roominsert;