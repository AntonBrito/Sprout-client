import React, { Component } from "react";
import Posts from "./components/stories/Posts";
import Header from "./components/layout/Header";
import AddPost from "./components/stories/AddPost";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Sprout" />
          <div className="container">
            <AddPost />
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
