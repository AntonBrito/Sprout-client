import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
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
