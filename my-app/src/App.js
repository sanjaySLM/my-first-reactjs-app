import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      op: 0,
      value1: 1,
      value2: 2,
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     op: 20,
  //   });
  // }

  componentDidUpdate() {
    console.log("did update life cycle");
  }

  myMethod = () => {
    this.setState({
      op: this.state.value1 + this.state.value2,
    });
  };

  render() {
    return (
      <>
        <div style={{ height: "100%", width: "100%", position: "fixed" }}>
          <div>{this.state.value1}</div>
          <div>{this.state.value2}</div>
          <button id="myBtn" onClick={this.myMethod.bind(this)}>
            Click Me
          </button>
          <div>{this.state.op}</div>
        </div>
      </>
    );
  }
}

export default App;
