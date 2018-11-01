import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { title, body } = this.state;

    const newPost = {
      id: uuid(),
      title,
      body
    };
    dispatch({ type: "ADD_POST", payload: newPost });
    // Clear State
    this.setState({
      title: "",
      body: ""
    });
  };
  onChange = e => this.setState({ [e.target.title]: e.target.value });

  render() {
    const { title, body } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add a Story</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control form-control-lg"
                      placeholder="Enter a Title"
                      value={title}
                      onChange={this.onChange}
                    />
                    <div className="form-group">
                      <label htmlFor="story">My Story</label>
                      <input
                        type="text"
                        name="story"
                        className="form-control form-control-lg"
                        placeholder="What would you like to share?"
                        value={body}
                        onChange={this.onChange}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Add a story"
                      className="btn btn-light btn-block"
                      cursor="pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddPost;
