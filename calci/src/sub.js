import React, { useState , useEffect } from "react";
function Sub (){






    const [input1,updInput1]=useState()
    const [input2,updInput2]=useState()
    const [answer,updAns]=useState()
    

     const add=()=>{
        updAns(parseInt( input1) - parseInt( input2))
    }
 
    const updA=(u)=>{
        updInput1(u.target.value)
    }

    return(
        <div style={{border:"2px solid"}}>
        <h1>Subtraction</h1>
        <label>Input1</label>
        <input type="text" id="one" value={input1} onChange={updA} ></input>  
        
        <label style={{margin:'0px 10px 10px 50px'}} >Input2</label>
        <input type="text" id="two" value={input2} onChange={(s)=>{updInput2(s.target.value)}} ></input><br/>

        <button style={{margin:'30px 10px 10px 180px'}} onClick={add}>Sub</button>

        <h2 >Answer is {answer}</h2>
        </div>
    )
}
export default Sub;