import React from "react";
import './index.css';

class Child extends React.Component {
  render() {
    return (
      <>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.props.passArr.map((item, index) => {
          return (
            <tr key={item + index}>
              <td> {item.fname}</td>
              <td>{item.lname}</td>
            <td><button id="editb" onClick={() => {this.props.passEditfunc(index,item.fname,item.lname) }}> Edit</button></td>
            </tr> );
        })}
        </tbody>
        </table>
      </>
    );
  }
}
export default Child;
