import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/stories/Posts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddPost from "./components/stories/AddPost";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Sprout" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
