import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    errors: {}
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { title, body } = this.state;

    // Check for errors
    if (title === "") {
      this.setState({ erros: { title: "Title is required" } });
      return;
    }

    if (body === "") {
      this.setState({ erros: { location: "body is required" } });
      return;
    }

    const newPost = {
      title,
      body
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );

    dispatch({ type: "ADD_POST", payload: res.data });

    // Clear State
    this.setState({
      title: "",
      body: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.title]: e.target.value });

  render() {
    const { title, body, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add a Story</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Title"
                    name="title"
                    placeholder="Enter a Title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <TextInputGroup
                    label="Body"
                    name="body"
                    placeholder="Add your Story"
                    value={body}
                    onChange={this.onChange}
                    error={errors.body}
                  />
                  <input
                    type="submit"
                    value="Add a story"
                    className="btn btn-light btn-block"
                  />
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
