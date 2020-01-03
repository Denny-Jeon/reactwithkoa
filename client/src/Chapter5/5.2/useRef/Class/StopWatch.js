// StopWatch.js
import React, { Component } from "react";

// 클래스 컴포넌트로 선언
class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 실행/중지를 위한 변수
      stop: false,

      // 시간 카운터
      currentTime: 0,
    };

    this.timerId = null;
  }

  // 시간 카운터 초기화 함수
  resetCurrentTime = () => {
    this.setState((prev) => ({
      ...prev,
      currentTime: 0,
    }));
  }

  // 실행/중지 함수
  setStop = () => {
    this.setState((prev) => ({
      ...prev,
      stop: !prev.stop,
    }));
  }


  // 시간 카운트 타이머 실행(1초마다 실행)
  startTimer = () => {
    const { stop } = this.state;

    this.timerId = setInterval(() => {
      if (!stop) {
        this.setState((prev) => ({
          ...prev,
          currentTime: prev.currentTime + 1,
        }));
      }
    }, 1000);
  }

  // 시간 카운트 타이머 삭제
  stopTimer = () => {
    if (this.timerId) clearInterval(this.timerId);
  }


  // 초기 랜더링 후 시간 카운트 타이머 구동
  componentDidMount = () => {
    this.startTimer();
  }


  // stop 값 변화에 따라 시간 카운트 타이머 삭제/구동
  componentDidUpdate = (prevProps, prevState) => {
    const { stop } = this.state;

    if (prevState.stop !== stop) {
      if (stop) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
    }
  }

  // 컴포넌트 언마운트 시 시간 카운트 타이머 삭제
  UNSAFE_componentWillMount = () => {
    this.stopTimer();
  }


  render() {
    const { currentTime } = this.state;

    return (
      <div>
        <div>{ currentTime }</div>
      </div>
    );
  }
}


export default StopWatch;
