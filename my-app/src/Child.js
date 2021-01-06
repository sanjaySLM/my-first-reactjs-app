import React from 'react';
import './App.css';

class Child extends React.Component {

    constructor() {
        console.log('Child Constructor');
        super();

    }


    myMethod = () => {
        console.log('Its My Method')
    }

    render() {
        console.log('Child Render');
        return (
            <div className="child">My Child</div>
        )
    }
}

export default Child;
