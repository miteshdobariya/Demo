import React, { useContext } from "react";
import Test from "./Test";

const Component4 = () =>{
    const user = useContext(Test)
    return(
        <>
        <h1>{user}</h1>
        </>

    )
}
export default Component4