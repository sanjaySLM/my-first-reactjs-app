import React from "react";
import Add from "./add";
import Sub from "./sub";

  

function App() {
  const operation="operation is addtion"




   


  return (
    <>
      <h1>Calculater Operation</h1>
      <ol>
        <li>Addtion </li>
        <li>Subtarction</li>
      </ol>
      
      <Add pass={operation}></Add>
      <Sub></Sub>
    </>
  );
}
export default App;
