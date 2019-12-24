// withLog.js

// WrappedComponent 인자로 갖는 withLog 컴포넌트 선언
const withLog = (WrappedComponent) => {
  WrappedComponent.prototype.UNSAFE_componentWillReceiveProps = (nextProps) => {
    console.log("Next props: ", nextProps);
  };
  return WrappedComponent;
};

export default withLog;
