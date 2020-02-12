import React, { Component } from "react";
/*输入框*/
export class Input extends Component {
  state = {
    value: this.props.value
  };
  onchange = e => {
    let value = e.target.value;
    this.setState({
      value: value
    });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      value: nextProps.value
    });
  };
  render() {
    let style;
    switch (this.props.size) {
      case "large":
        style = {
          height: "36px",
          inlineHeight: "36px",
          fontSize: "18px"
        };
        break;
      case "small":
        style = {
          height: "24px",
          inlineHeight: "24px",
          fontSize: "12px"
        };
        break;
      default:
        style = {
          height: "30px",
          inlineHeight: "30px",
          fontSize: "15px"
        };
        break;
    }

    style = Object.assign(this.props.style || {}, style);
    let placeholder = this.props.placeholder || "请输入...";
    return (
      <div>
        <input
          placeholder={placeholder}
          style={style}
          onChange={this.onchange}
          value={this.state.value}
        ></input>
      </div>
    );
  }
}

// import React from "react";

// class Count extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   // 渲染函数，this 指向实例本身
//   render() {
//     return (
//       <p>
//         <button onClick={this.clickCount}>点击我增加一次点击计数</button>
//         <p>你已经点击了{this.state.count}次</p>
//       </p>
//     );
//   }

//   clickCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
// }
export default Input;
