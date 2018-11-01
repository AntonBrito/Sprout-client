import React, { Component } from "react";
import { Consumer } from "../../context";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
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
                <form onSubmit={this.onSubmit}>
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
