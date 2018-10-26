import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Miracle",
        body: "Its amazing seeing this little one growing every single day."
      },
      {
        id: 2,
        title: "Being a father",
        body:
          "From the moment tha she was born, I felt in love with my new life, starting by sayim Im a father. Im her father and Im resposimble to bring her to this beatiful world."
      },
      {
        id: 3,
        title: "Raining Day",
        body:
          "Let the water drop take you to this beautiful ocean where everything is blue and green"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
