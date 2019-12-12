// withSquare.js
import React from "react";

// WrappedComponent 인자로 갖는 withSquare 컴포넌트 선언
// WrappedComponent 인자는 이를 사용하는 컴포넌트를 의미한다.
const withSquare = (WrappedComponent) => {
  // SquareComponent 선언.
  class SquareComponent extends React.Component {
    // 배수를 관리하기 위한 times state
    state = {
      times: 2,
      value: 0,
    };

    // 몇 배로 곱할건지 설정하는 함수
    handleSetTimes = ({ times }) => {
      const { value } = this.state;
      this.setState({
        times,
        value,
      });
    }

    // count에 times 배수를 수행하는 함수
    handleSquare = ({ count }) => {
      const { times } = this.state;

      this.setState({
        times,
        value: Math.pow(count, times),
      });
    }

    render() {
      const { value } = this.state;
      return (
        // 인자로 전달받은 WrappedComponent에
        // count와 handeIncrease를 prop으로 전달
        <WrappedComponent
          squareValue={value}
          handleSetTimes={this.handleSetTimes}
          handleSquare={this.handleSquare}
          {...this.props}
        />
      );
    }
  }

  // 최종적으로 AddComponent 리턴한다.
  return SquareComponent;
};

export default withSquare;
