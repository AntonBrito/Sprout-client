import React, { Component } from "react";
import Post from "./Post";
import { Consumer } from "../../context";

class Posts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { posts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Spr</span>
                out
              </h1>
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Posts;
