import React from "react";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [],
    };
  }
  saving = () => {
    let obj = { fname: document.getElementById("fname").value };

    let newarray = this.state.array;
    newarray.push(obj);
    this.setState({ array: newarray });

    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  };

  render() {
    console.log(this.state.array);
    return (
      <div>
        <h1>contact Form</h1>
        <label>FIRST NAME:</label>
        <input type="text" id="fname"  /> <br />
        <div>
          <button id="save" onClick={this.saving}>
            save
          </button>
        </div>
        <div>
          <button
            id="show"
            onClick={() => {
              this.setState({ num: 1 });
            }}
          >
            show
          </button>
        </div>
        <div>
          <button
            id="hide"
            onClick={() => {
              this.setState({ num: 0 });
            }}
          >
            hide
          </button>
        </div>
        {this.state.num === 1 && <Child pass={this.state.array}></Child>}
      </div>
    );
  }
}
export default App;
