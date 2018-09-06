import React, { Component } from "react";
import Post from "./components/stories/Post";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
      </div>
    );
  }
}

export default App;
