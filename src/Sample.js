import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <input
        type="button"
        value={this.props.number}
        onClick={this.props.handleClick}
      />
    );
  }
}
