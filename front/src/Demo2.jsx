import React, { useMemo, useState } from "react";
const Demo2 = () =>{
    const [count , setcount] = useState(0)
    const [count1, setcount1] = useState(0)

    const demo = () =>{
            setcount(count + 1)
    }
    const test = () =>{
        setcount1(count1+1)
    }

    

    const memo = useMemo(
        function my(){
            console.log('good');
        },[count]
    )
 
    return(
        <>
        {memo}
        <h1>{count }</h1>
        <button type="button" onClick={demo}>count</button>



        <h1>{count1 }</h1>
        <button type="button" onClick={test}>count1</button>
        </>
    )
}
export default Demo2;