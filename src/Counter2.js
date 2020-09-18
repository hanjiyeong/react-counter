import { number } from "prop-types";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    class: "",
  };

  handleIncrease = () => {
    if (this.state.number < this.props.maxNumber) {
      this.setState({
        class: "",
        number: this.state.number + 1,
      });
    } else {
      this.setState({
        class: "error",
      });
      alert("최대 인원 수를 초과하였습니다.");
    }
  };

  handleDecrease = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  };

  render() {
    return (
      <div className={`counter ${this.state.class}`}>
        <header>
          <h1>인원 수를 선택하세요.</h1>
          <p>
            이 숙소의 최대 인원 수는 <strong>{this.props.maxNumber}</strong>
            명입니다.
          </p>
        </header>
        <div className="stepper">
          <button
            type="button"
            onClick={this.handleDecrease}
            disabled={this.state.number <= 0 ? "disabled" : ""}
          >
            값 내리기
          </button>
          <div className="number">{this.state.number}</div>
          <button type="button" onClick={this.handleIncrease}>
            값 올리기
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
