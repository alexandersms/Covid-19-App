import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stats from "./Stats/Stats";
import Home from "./components/Home/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/statistics" exact component={Stats} />
      </Router>
    );
  }
}

export default App;
