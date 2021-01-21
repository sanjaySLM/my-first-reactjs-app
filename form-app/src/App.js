import React, { createRef }  from "react";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [],
      fname:"",
      lname:"",
      pos:-1
    };
    this.childRef= new createRef();
  }
  saving = () => {
    let newarray = this.state.array;

    if(this.state.pos===-1 && this.state.fname !=="" && this.state.lname !==""){
    let obj = { fname: this.state.fname ,lname: this.state.lname  };
    newarray.push(obj);
    console.log(this.state.array)
    this.setState({ array: newarray,fname:"",lname:"" });
   }
   else if(this.state.fname !=="" && this.state.lname !=="") {
      newarray[this.state.pos].fname=this.state.fname
      newarray[this.state.pos].lname=this.state.lname
      this.setState({array: newarray,fname:"",lname:"",pos:-1})
}
else{alert("Enter the Data")}
}
updatef = (uf) => {this.setState({fname:uf.target.value})}
updatel = (ul) => {this.setState({lname:ul.target.value})}

edit =(i,fname,lname)=>{
  this.setState({
    fname:fname,
    lname:lname,
    pos:i,
})
}
 render() {
    return (
      <div >
        <div id="inputBoxDiv" style={{textAlign:"center"}} >
        <h1 >Contact Form</h1>
        <label>FIRST NAME:</label>
        <input type="text" id="fname"  value={this.state.fname} onChange={this.updatef} /> <br /><br />
        <label>LAST NAME:</label>
        <input type="text" id="lname"  value={this.state.lname} onChange={this.updatel} /> <br />
        <button id="save" className="sty" onClick={this.saving}>save</button>
        <button id="show" className="sty" onClick={() => { this.setState({ num: 1 });}}>show</button>
        <button id="hide" className="sty" onClick={() => {this.setState({ num: 0 });}}> hide</button>
        </div>

        {this.state.num === 1 && 
        <Child 
        ref={this.childRef}
        passArr={this.state.array} 
        passEditfunc={this.edit}>
        </Child>}
      </div>
    );
  }
}
export default App;