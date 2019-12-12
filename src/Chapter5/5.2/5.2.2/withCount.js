// withCount.js
import React from "react";

// WrappedComponent 인자로 갖는 withCount 컴포넌트 선언
// WrappedComponent 인자는 이를 사용하는 컴포넌트를 의미한다.
const withCount = (WrappedComponent) => {
  // 기존 Count.js와 동일한 기능을 갖는 CountComponet를 선언.
  class CountComponent extends React.Component {
    // count state를 선언
    state = {
      count: 0,
    }

    // count를 하나씩 증가시키는 메소드 추가
    handleIncrease = () => {
      console.log("withCount");
      const { count } = this.state;
      // setState 함수를 호출하여 count를 증가시킨다.
      this.setState({ count: count + 1 });
    }

    render() {
      const { count } = this.state;

      return (
        // 인자로 전달받은 WrappedComponent에
        // count와 handeIncrease를 prop으로 전달
        <WrappedComponent
          count={count}
          handleIncrease={this.handleIncrease}
          {...this.props}
        />
      );
    }
  }

  // 최종적으로 CountComponent를 리턴한다.
  return CountComponent;
};

export default withCount;
