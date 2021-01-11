import React from 'react';

class App extends React.Component {
    constructor() {
        super();
         this.array=[]

        this.state = {
            info:{fname:undefined,lname:undefined,gender:undefined,age:undefined,course:undefined},
            dataarray:[]
        }
    }
saving = () => {
   this.array=this.state.dataarray
        this.array.push(this.state.info)
          this.setState({info:{
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            gender: document.getElementById("gender").value,
            age: document.getElementById("age").value,
            course: document.getElementById("course").value}
        })
    } 
    render() {
        console.log(this.array);
        return (

            <div>
                <h1 >contact Form</h1>
                <label >FIRST NAME:</label>
                <input type="text" id="fname" /> <br />

                <label>LAST NAME:</label>
                <input type="text" id="lname" /><br />

                <label>GENDER:</label>
                <input type="text" id="gender" /><br />

                <label>AGE:</label>
                <input type="number" id="age" min="1" max="100" /><br />

                <label >COURSE:</label>
                <input type="text" id="course" /><br />

                <button id="save" onClick={this.saving} >save</button><br />
            </div>
        );

    }
}
export default App;