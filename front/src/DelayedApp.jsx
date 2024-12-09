import React, { useEffect, useState } from "react";
import Main from "./Main";
import Loader from "./Loader";
import Login from './Login';
const DelayedApp=()=>{
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setloading(false);
        },1000);
    },[])
    return(
        <>
            {loading ? (<Loader/>) : (<Main />)}
        </>
    )
}
export default DelayedApp;