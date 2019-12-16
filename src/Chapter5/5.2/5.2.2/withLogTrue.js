// withLog.js
import React from "react";


// WrappedComponent 인자로 갖는 withLog 컴포넌트 선언
const withLog = (WrappedComponent) => {
  class LogComponent extends React.Component {
    USAFE_componentWillReceiveProps = (nextProps) => {
      console.log("Next props: ", nextProps);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  LogComponent.displayName = "withLog";


  // 최종적으로 CountComponent를 리턴한다.
  return LogComponent;
};

export default withLog;
