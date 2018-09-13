import React, { Component } from "react";
import Posts from "./components/stories/Posts";
import Header from "./components/layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Sprout" />
        <div className="container">
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
