import React, { Component } from "react";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      Posts: [
        {
          title: "Miracle",
          body: "Its amazing seeing this little one growing every single day."
        },
        {
          title: "Being a father",
          body:
            "From the moment tha she was born, I felt in love with my new life, starting by sayim Im a father. Im her father and Im resposimble to bring her to this beatiful world."
        },
        {
          title: "Raining Day",
          body:
            "Let the water drop take you to this beautiful ocean where everything is blue and green"
        }
      ]
    };
  }
  return() {
    const { posts } = this.state;
    return;
    <div>
      {posts.map(post => (
        <h1>{post.title}</h1>
      ))}
    </div>;
  }
}

export default Posts;
