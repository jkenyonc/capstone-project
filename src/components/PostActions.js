import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class ButtonActions extends Component {
  render() {
    const { buttons } = this.props;
    const buttongroup = buttons.map(button => (
      <button key={button.text}>
        <FontAwesome name={button.icon} /> {button.text}
      </button>
    ));
    return buttongroup;
  }
}

class PostActions extends Component {
  render() {
    return (
      <div>
        <ButtonActions
          buttons={[
            { text: "Comments", icon: "comments" },
            { text: "Bookmark", icon: "bookmark" },
            { text: "Hide", icon: "eye-slash"}
          ]}
        />
      </div>
    );
  }
}

export default PostActions;
