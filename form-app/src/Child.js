import React from "react";


class Child extends React.Component {
  constructor(){
    super()
    this.state={
      edit: false
    }
  }
  render() {
    return (
      <>
        {this.props.pass.map((item, index) => {
          return (
            <div key={item + index}>
              {item.fname}
              <button onClick={() => {document.getElementById("fname").value = item.fname;
                                       this.setState({edit: true})
            }}>edit</button>
              </div>
          );
        })}
      </>
    );
  }
}
export default Child;
