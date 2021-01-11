import React from "react";
import'./Style.css';

class Loginform extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>LoginForm</h1>
          <input type="text" placeholder="Enter Name or MailId" required />
          <br/>
          <input type="password" placeholder="Enter Password" required />
          <br/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Loginform;
