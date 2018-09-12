import React, { Component } from "react";
import Post from "./components/stories/Post";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Sprout" />
        <div className="container">
          <Post
            title="Miracle"
            body="Its amazing seeing this little one growing every single day."
          />
          <Post
            title="Being a father"
            body="From the moment tha she was born, I felt in love with my new life, starting by sayim Im a father. Im her father and Im resposimble to bring her to this beatiful world."
          />
        </div>
      </div>
    );
  }
}

export default App;
