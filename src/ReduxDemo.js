import React from "react";
import "./ReduxDemo.css";

class ReduxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
  }
  onAddText = event => {
    this.setState({
      text: event.target.value
    });
    console.log(this.state.text);
  };

  displayValue = () => {
    if (this.state.text === "") {
      return null;
    } else {
      this.setState({
        items: this.state.items.concat(this.state.text),
        text: ""
      });
    }
  };
  clearData = () => {
    this.setState({
      items: []
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <h1 className="heading">TO DO</h1>
        <input
          onChange={this.onAddText}
          value={this.state.text}
          placeholder="Search"
        />

        <br />

        <button onClick={this.displayValue}>Add value</button>
        <button onClick={this.clearData}>Clear List</button>
      </div>
    );
  }
}

export default ReduxDemo;
