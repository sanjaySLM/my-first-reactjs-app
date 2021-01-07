import React from "react"; 
import'./Style.css';



class Signupform extends React.Component {
    render() {
      return (
      <form class="sign">
      <label>Name</label>
        <input type="text" placeholder="Username" id="username" /> 

        <label>Password</label>
        <input type="password" placeholder="Password" id="password" /> 
        

        <input type="submit" value="Sign In" />
      
        </form>
      );
    }
  
 } 
export default Signupform;
  