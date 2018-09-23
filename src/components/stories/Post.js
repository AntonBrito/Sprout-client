import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    const { title, body } = this.props.post;
    return (
      <div className="card card-body mb-3">
        <h4 className="list-group-item">{title} </h4>
        <h6 className="list-group-item">{body}</h6>
      </div>
    );
  }
}

Post.protoTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
