import React, { Component } from "react";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };

  onTitleChange = e => this.setState({ title: e.target.value });
  onBodyChange = e => this.setState({ body: e.target.value });

  render() {
    const { title, body } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add a Story</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="form-control form-control-lg"
                placeholder="Enter a Title"
                value={title}
                onChange={this.onTitleChange}
              />
              <div className="form-group">
                <label htmlFor="story">My Story</label>
                <input
                  type="text"
                  name="story"
                  className="form-control form-control-lg"
                  placeholder="What would you like to share?"
                  value={body}
                  onChange={this.onBodyChange}
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
  }
}

export default AddPost;
