import React, { Component } from "react";
import Post from "./components/stories/Post";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Sprout" />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
