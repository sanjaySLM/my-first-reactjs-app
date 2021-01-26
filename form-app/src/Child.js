import React from "react";
import './index.css';
import ChildFunc from './FuncComp'


class Child extends React.Component {
  // shouldComponentUpdate(nextprops,nextstate){
  //   return this.props.checkRerender !== nextprops.checkRerender;
  // }
  render() {
    return (
      <>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
        {this.props.passArr.map((item, index) => {
          return (
            <tr key={item + index}>
              <td> {item.fname}</td>
              <td>{item.lname}</td>
            <td><button id="editb" onClick={() => {this.props.passEditfunc(index,item.fname,item.lname) }}>Edit</button></td>
            <td><button  id="delb" onClick={()=>{this.props.passDelfunc(index) }}> Delete</button></td>

            </tr> );
                   <ChildFunc passindex={index}/>

        })}
        </tbody>
        </table>
      </>
    );
  }
}
export default Child;