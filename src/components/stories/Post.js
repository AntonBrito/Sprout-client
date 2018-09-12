import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <div className="">
        <h4>{title}</h4>
        <h6>{body}</h6>
      </div>
    );
  }
}

Post.protoTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
