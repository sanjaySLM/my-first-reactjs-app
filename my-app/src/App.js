import React from 'react';
import Child from './Child'
import './App.css';

class App extends React.Component {

  constructor() {
    console.log('App Constructor');
    super();
    <Child />
    console.log(document.getElementById('myBtn'));
    this.state = {
      op: 0
    }

  }

  componentDidMount() {
    console.log(document.getElementById('myBtn'));
    this.setState({
      op: 20
    });
  }

  componentDidUpdate(){
    console.log('did update life cycle');
  }


  myMethod = () => {
    console.log('Its My Method')
    this.setState({
      op: 7
    });
  }

  render() {
    console.log('App Render');
    return (
      <>
        <div style={{ height: '100%', width: '100%', position: 'fixed' }}>
          <button id="myBtn" onClick={this.myMethod.bind(this)}>Sample button</button>
          <div>App Div</div>
          <div>{this.state.op}</div>
        </div>

      </>
    )
  }
}

export default App;
