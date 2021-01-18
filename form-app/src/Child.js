import React from "react";

class Child extends React.Component {
  constructor(props){
    super(props)
    this.state={
      dis : this.props.pass
    }
  }

    showing = () => {
      this.setState({
        display: "block",
      });
      var data = "<div>";
      this.state.dis.forEach( (item)=> {
        data = data + "<div>" + item.fname + "</div>";
      });
  
      data = data + "</div>";
  
      document.getElementById("div").innerHTML = data;
    };
  
render(){
  return(
<>
<div> <button id="show" onClick={this.showing}>show  </button></div>
<div id="div" style={{ display: this.state.display }}></div>
</> )
}

}
export default Child;