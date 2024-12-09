import React, { useState } from "react";
import CountUp from 'react-countup';
const Use = () =>{

var demo = "hello"

const [data,setdata]= useState("hii")
    const test = () =>{
        setdata("hello")
        console.log(data);
    }
    return(
        <>
        {/* <h1>

<CountUp end={100} />
        </h1>
        <h1>

<CountUp end={50} />
        </h1>
        <h1>

<CountUp end={20} />
        </h1>
        <h1>

<CountUp end={80} />
        </h1> */}
        <h1>{data}</h1>
        {/* <button type="button" onClick={test}>Click</button> */}
        <input type="text" onChange={(i)=>{setdata(i.target.value)}} />
        </>
    )
}
export default Use;