import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Post extends Component {
  state = {
    showPostInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    dispatch({ type: "DELETE_POST", payload: id });
  };

  render() {
    const { id, title, body } = this.props.post;
    const { showPostInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`post/edit${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
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
