import React, { useState } from 'react'

const SimpleFunc =(data)=>{

    const [displayElement1]=useState("This Table has")
    const {passIndi}=data
    const [displayElement2]=useState("Data")


return(
    <div style={{margin:"10px 500px 10px 400px",color:'black'}}> <marquee direction="right" >
        {displayElement1} {passIndi} {displayElement2}  </marquee>
    </div>
)


}
export default SimpleFunc