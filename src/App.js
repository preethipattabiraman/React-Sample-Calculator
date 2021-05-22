import React from "react";
import "./styles.css";
import Button from "./Sample.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { equation: "", answer: "" };
  }

  createSquare = (number) => {
    return <Button number={number} handleClick={this.handleClick} />;
  };

  handleClick = (e) => {
    let value = e.target.value;
    switch (value) {
      case "=":
        let eq = this.state.equation;
        this.setState({
          answer: eval(eq.toString())
        });
        break;
      case "C":
        this.setState({
          equation: "",
          answer: ""
        });
        break;
      default:
        let equation = this.state.equation + value;
        this.setState({
          equation: equation
        });
    }
  };

  render = () => {
    return (
      <div className="App">
        <h1>Let's create power!</h1>
        <input type="text" defaultValue={this.state.equation} readOnly />
        <br />
        <input type="text" defaultValue={this.state.answer} readOnly />
        <br />
        <table>
          <tbody>
            <tr>
              <td>{this.createSquare(9)}</td>
              <td>{this.createSquare(8)}</td>
              <td>{this.createSquare(7)}</td>
              <td>{this.createSquare("+")}</td>
            </tr>
            <tr>
              <td>{this.createSquare(6)}</td>
              <td>{this.createSquare(5)}</td>
              <td>{this.createSquare(4)}</td>
              <td>{this.createSquare("-")}</td>
            </tr>
            <tr>
              <td>{this.createSquare(3)}</td>
              <td>{this.createSquare(2)}</td>
              <td>{this.createSquare(1)}</td>
              <td>{this.createSquare("*")}</td>
            </tr>
            <tr>
              <td>{this.createSquare("**")}</td>
              <td>{this.createSquare("0")}</td>
              <td>{this.createSquare("/")}</td>
              <td>{this.createSquare("=")}</td>
            </tr>
            <tr>
              <td>{this.createSquare("C")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}
