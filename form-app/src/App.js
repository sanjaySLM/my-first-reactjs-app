import React, { createRef }  from "react";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [],
      fname:"",
      lname:"",
      fsave:1
    };
    this.childRef= new createRef();
  }
  saving = () => {
    
   if (this.state.fsave===1){
    let obj = { fname: this.state.fname ,lname: this.state.lname  };
    let newarray = this.state.array;
    newarray.push(obj);
    this.setState({ array: newarray });
    this.setState({fname:"",lname:""})
    console.log(this.state.array)
   }
   else{

   }
};
updatef = (uf) => {this.setState({fname:uf.target.value})}
updatel = (ul) => {this.setState({lname:ul.target.value})}

edit =(i,fname,lname)=>{
  this.setState({
    fname:fname,
    lname:lname,
    fsave:1,
})
}
 render() {
    return (
      <div>
        <h1>contact Form</h1>
        <label>FIRST NAME:</label>
        <input type="text" id="fname"  value={this.state.fname} onChange={this.updatef} /> <br /><br />
        <label>LAST NAME:</label>
        <input type="text" id="lname"  value={this.state.lname} onChange={this.updatel} /> <br />

        <div><button id="save" onClick={this.saving}>save</button></div>
        <div><button id="show" onClick={() => { this.setState({ num: 1 });}}>show</button></div>
        <div><button id="hide" onClick={() => {this.setState({ num: 0 });}}> hide</button></div>

        {this.state.num === 1 && 
        <Child 
        ref={this.childRef}
        passArr={this.state.array} 
        passFname={this.state.fname}
        passEditfunc={this.edit}
        passsavefunc={this.saving}
         ></Child>}
      </div>
    );
  }
}
export default App;
