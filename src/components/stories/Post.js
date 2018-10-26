import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Post extends Component {
  state = {
    showPostInfo: false
  };

  onDeleteClick() {}

  render() {
    const { title, body } = this.props.post;
    const { showPostInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {title}
                <i
                  onClick={() =>
                    this.setState({ showPostInfo: !this.state.showPostInfo })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick}
                />
              </h4>
              {showPostInfo ? (
                <h6 className="list-group-item">{body} </h6>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Post.protoTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
