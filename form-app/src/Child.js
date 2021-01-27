import React from "react";
import './index.css';
import ChildFunc from './FuncComp'
import SimpleFunc from './SimpleFunc'

class Child extends React.Component {
  constructor(){
    super()
    this.indi=-1
  }

  render() {
    return (
      <>
      <table>
        <thead>
          <tr>
            <td>Index</td>
            <th>Firstname</th>
            <th>Lastname</th>
            <th colSpan="2">Buttons</th>
          </tr>
        </thead>
        <tbody>
        {this.props.passArr.map((item, index) => {
        this.indi=index + 1
          return (
            <tr key={item + index}>
            <td><ChildFunc passIndex={index}></ChildFunc></td>
            <td> {item.fname}</td>
            <td>{item.lname}</td>
            <td><button id="editb" onClick={() => {this.props.passEditfunc(index,item.fname,item.lname) }}>Edit</button></td>
            <td><button  id="delb" onClick={()=>{this.props.passDelfunc(index) }}> Delete</button></td>
            </tr>
            );
            })}
        </tbody>
        </table>
        {this.indi >1  &&  <SimpleFunc passIndi={this.indi}></SimpleFunc>}
        </>
    );
  }
}
export default Child;