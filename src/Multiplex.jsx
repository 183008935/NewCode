import React, { Component } from "react";

export default class MultiplexList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.data.map((item, index) => (
        <li
          key={index}
          onClick={() => this.click(item)}
          style={this.props.style}
        >
          {item}
        </li>
      ))
    };
  }

  click = item => {
    this.props.onItemClick(item);
  };
  render() {
    return (
      <div>
        <ul>{this.state.list}</ul>
      </div>
    );
  }
}
