import React, { useState } from "react";
import Component2 from "./Component2";
import Test from "./Test";

const Component1 = () =>{
    const [data , setdata] = useState("hello")
    return(
        <>
    <Test.Provider value={data}>
    <Component2/>
    </Test.Provider>
    
        </>
    )
}
export default Component1