import React, { Component } from "react";
import Counter from "./Counter";
import "./Counter.css";

class App extends Component {
  render() {
    return <Counter maxNumber="3" />;
  }
}

export default App;
