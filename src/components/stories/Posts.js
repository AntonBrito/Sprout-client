import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Miracle",
        body: "Its amazing seeing this little one growing every single day."
      },
      {
        id: 2,
        title: "Being a father",
        body:
          "From the moment tha she was born, I felt in love with my new life, starting by sayim Im a father. Im her father and Im resposimble to bring her to this beatiful world."
      },
      {
        id: 3,
        title: "Raining Day",
        body:
          "Let the water drop take you to this beautiful ocean where everything is blue and green"
      }
    ]
  };

  deletePost = id => {
    const { posts } = this.state;

    const newPosts = posts.filter(post => post.id !== id);

    this.setState({
      posts: newPosts
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            deleteClickHandler={this.deletePost.bind(this, post.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Posts;
