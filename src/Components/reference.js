//import statement

import React, { Component } from "react";
import "./App.css";

// declare only variables

class Reference extends Component {
  // declare state
  constructor(props) {
    super(props);
    this.state = {
      color: "green",
      name: "jagadesh",
    };
  }

  // do logicall stuffs here (loops,if condition,etc) but it should be within a function or lifecycle methods
  // change states here

  //life cycle methods (Mount,Update,Unmount)

  // Mounting Methods (includes render also)

  UNSAFE_componentWillMount() {
    // do things before component render (execute multipe times)
    // make api calls and logical stuff (you can do it but not recommended)

    console.log("I am UNSAFE_componentWillMount");
  }
  componentDidMount() {
    // do things after component render (execute one time)
    // make api calls and logical stuff (you should do it and recommended)

    console.log("I am componentDidMount");
    this.setState({ color: "red" });
  }

  // Update Methods (includes render also)

  componentDidUpdate(prevProps, prevState) {
    // do things after or before component render
    //execute when state or props changes
    // make api calls and logical stuff by writing it inside conditions to avoid setState running in loops(you should do it and recommended)

    console.log("I am componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevState.color !== this.state.color) {
      this.setState({ color: "pink" });
    }
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    // get new props and it wont execute when state changes when new action is triggered in page

    console.log("I am UNSAFE_componentWillReceiveProps");
    console.log("newProps", newProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // do component rendering based on returning true or false
    // write conditions and return true or false
    //execute when state or props changes

    console.log("I am shouldComponentUpdate");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    if (nextState.color !== this.state.color) {
      return true;
    }
  }

  //Unmount Method

  componentWillUnmount() {
    //clear state,api and makes component unmount  

    console.log("I am componentWillUnmount");
    this.setState({ color: "" });
  }

  render() {
    //declare or destructure variable from state or props
    //debug using console.log()
    // do logicall stuffs here (loops,if condition,etc)
    //access function or objects declared above render using this keyword
    // dont use setState inside render
    //but you can setState in return if u write function directly to a component

    const { color } = this.state;
    console.log("props", this.props);
    return (
      <div className="App">
        {/* you can use ternary conditions inside return*/}
        <h1>{color}</h1>
      </div>
    );
  }
}

export default Reference;

// export statement
