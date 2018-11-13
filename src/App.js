import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/stories/Posts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import AddPost from "./components/stories/AddPost";
import EditPost from "./components/stories/EditPost";
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
                <Route exact path="/stories/add" component={AddPost} />
                <Route exact path="/stories/edit/:id" component={EditPost} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
