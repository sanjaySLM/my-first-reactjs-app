import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      op: 0
    }
  }

  // componentDidMount() {
  //   console.log(document.getElementById('myBtn'));
  // }

  componentDidUpdate(){
    alert(this.state.op)
  }



  // myMethod = () => {
  //   this.setState({
  //     op: this.state.val1 + this.state.val2,
  //     display: "block"S
  //   });
  // }
  myMethod = () => {
    this.setState({ op: parseInt(document.getElementById("val1").value )+ 
    parseInt(document.getElementById("val2").value)
})
}                                        
render() {
  return (
  
      <div style={{ height: '100%', width: '100%', position: 'fixed' }}>
        
      <input id="val1" type="number"></input>
      
      <input id="val2" type="number"></input>

        <button id="myBtn" onClick={this.myMethod}>Sample button</button>

        {/* <div style={{ display: this.state.display }}> */}

          <div>{this.state.op}</div>
          <div></div>
        </div>
    
  )
}
}

export default App;
