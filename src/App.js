import React, { Component } from "react";
import { Router } from "react-router-dom";
import "./App.css";
import Home from "pages/Home";

class App extends Component {
  render() {
    return (
      <div>
          <Home />
      </div>
    );
  }
}

export default App;
