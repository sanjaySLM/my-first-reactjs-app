import React, {useState} from 'react'

const ChildFunc =(props)=>{
var  [passindex,Updcount]=useState(90)

const numOfCount=()=>{
    Updcount ( passindex + 1)
    console.log(passindex)
}
    return(
        <div>
            <button onClick={numOfCount}>Click</button>
            count  {passindex}
        </div>
    )
    } 
    export default ChildFunc;