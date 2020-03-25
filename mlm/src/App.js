import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Drawing from "./pages/Drawing";
import Home from "./pages/Home";




class App extends Component {

  render() {
    return (
      <Router>
        <Navbar
          title="Magical Learning Moment Drawing"
        ></Navbar>
        <Switch>
          <Route exact path="/" component={Drawing} />
          <Route exact path="/drawing" component={Drawing} />
        </Switch>
      </Router>
    );
  }
}

export default App;