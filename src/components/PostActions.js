import React, { Component } from "react";

class GenericActions extends Component {
  render() {
    const { buttons } = this.props;
    const render = buttons.map(button => (
      <button>{button.text}</button>
    ));
    return {};
  }
}

class PostActions extends Component {
  render() {
    return (
      <div>
        <GenericActions
          buttons={[{ text: "Comment" }, { text: "Save" }, { text: 5 }]}
        />
      </div>
    );
  }
}

export default PostActions;
