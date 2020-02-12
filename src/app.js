import React, { Component } from "react";
import Input from "./components/Input";
import Multiplex from "./Multiplex";
const list = ["这是个小游戏", "javaScript高级程序设计", "无聊的生活"];
const style = {
  background: "red",
  listStyle: "none",
  padding: "5px",
  width: "200px",
  marginBottom: "5px"
};
export default class App extends Component {
  state = {
    value: "你好"
  };
  onClick = item => {
    console.log(item);
  };
  onChange = value => {
    this.setState({
      value: value
    });
  };
  render() {
    return (
      <div>
        <Multiplex data={list} style={style} onItemClick={this.onClick} />
        <Input size="small" value={this.state.value} onChange={this.onChange} />
        {this.state.value}
        <button onClick={this.onChange.bind(this, "哈哈")}>点击</button>
      </div>
    );
  }
}
