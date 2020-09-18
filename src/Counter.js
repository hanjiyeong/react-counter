import { number } from "prop-types";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };

  handleIncrease = () => {
    if (this.state.number < this.props.maxNumber) {
      /*
      // 큰 문제는 아니지만, 굳이 또 this.state를 조회해야 함
      this.setState({
        number: this.state.number + 1,
      });

      // setState에 updater 함수를 만들어서 전달
      this.setState(({ number }) => ({
        number: number + 1,
      }));
      */

      // 다음과 같이 코드를 줄일 수도 있다.
      const { number } = this.state;
      this.setState({
        number: number + 1,
      });
    } else {
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
      <div className="counter">
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
