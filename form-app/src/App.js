import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      gender: "",
      age: "",
      course: "",
    };
  }
 saving = () => {
    if (
      document.getElementById("fname").value &&
      document.getElementById("lname").value &&
      document.getElementById("gender").value &&
      document.getElementById("age").value &&
      document.getElementById("course").value
    ) {
      this.setState({
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value,
      });
    } else {
      alert("Enter all the values first");
    }
  };
  componentDidUpdate() {
    this.array.push(this.state);
    console.log("Result Array", this.array);

    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  }
 componentDidMount() {
    this.array = [];
  }
  render() {
    return (
      <div>
        <h1>contact Form</h1>
        <label>FIRST NAME:</label>
        <input type="text" id="fname" /> <br />
        <label>LAST NAME:</label>
        <input type="text" id="lname" /> <br />
        <label>GENDER:</label>
        <input type="text" id="gender" /> <br />
        <label>AGE:</label>
        <input type="number" id="age"  min="1"    max="100"/> <br />
        <label>COURSE:</label>
        <input type="text" id="course" /><br />
        <div><button id="save" onClick={this.saving}>save</button> </div>
      </div>
    );
  }
}
export default App;
