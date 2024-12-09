import React, { useRef } from "react";

const Demo1 = () => {

    const name=useRef()
    const email=useRef()
    const test = (e)=>{
        e.preventDefault()

        console.log(name.current.value);
        console.log(email.current.value);
    //    name.current.value = 'hello' 

    }
  return (
    <>
      <form onSubmit={test}>
        <input type="text"  ref={name} />
        <input type="text"  ref={email} />
        <input type="submit" />
      </form>  
    </>
  );
};
export default Demo1;
