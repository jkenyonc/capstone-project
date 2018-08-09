import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "../styles/comments.css";

class ButtonActions extends Component {
  render() {
    const { buttons } = this.props;
    const buttongroup = buttons.map(button => (
      <button className="action_buttons" key={button.text}>
        <FontAwesome name={button.icon} /> {button.text}
      </button>
    ));
    return buttongroup;
  }
}

class PostActions extends Component {
  render() {
    return (
      <div className="post-button">
        <ButtonActions
          buttons={[
            { text: "Comments", icon: "comments" },
            { text: "Bookmark", icon: "bookmark" },
            { text: "Hide", icon: "eye-slash" },
            { text: "Delete", icon: "trash-alt" }
          ]}
        />
      </div>
    );
  }
}

export default PostActions;
