import axios from "axios";
import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Header from "./Header";
import { useNavigate } from "react-router-dom";



// Cors => Backend

// toastify => frontend

const Signup = () => {


  // useEffect(()=>{
  //   axios.get('http://localhost:3001/get')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response.data.data[0]);
      
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // },[])


    const username = useRef()
    const email = useRef()
    const password = useRef()
    const Navigate=useNavigate();

    const register = (e) => {
        e.preventDefault()

        var obj = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        } 

        axios.post('http://localhost:9999/add',obj)
        .then(function (response) {
          // handle success
          console.log(response);
          if(response.data.status == "done")
          {
            toast("Success Register");
            localStorage.setItem("email",obj.email);
            Navigate("/login");
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
                    <h1>Sign Up</h1>
                    <form onSubmit={register}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" ref={username} />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" ref={email} />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" ref={password} />


                        <button className="sign-button" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;