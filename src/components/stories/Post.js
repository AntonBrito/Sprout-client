import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {
  state = {
    showPostInfo: false
  };

  render() {
    const { title, body } = this.props.post;
    const { showPostInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {title}
          <i
            onClick={() =>
              this.setState({ showPostInfo: !this.state.showPostInfo })
            }
            className="fas fa-sort-down"
          />
        </h4>
        {showPostInfo ? <h6 className="list-group-item">{body} </h6> : null}
      </div>
    );
  }
}

Post.protoTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
