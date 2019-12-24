// RenderPropsCount.js
import React from "react";

class RenderPropsCount extends React.Component {
    state = {
      count: 0,
    }

    handleIncrease = () => {
      console.log("render props");

      const { count } = this.state;
      this.setState({ count: count + 1 });
    }

    render() {
      const { count } = this.state;
      const { render } = this.props;
      return (
        <>
          {/* 별도의 render 처리 로직이 없고 props으로 전달된 render 함수를 호출한다. */}
          { render({
            count,
            handleIncrease: this.handleIncrease,
          })}

        </>
      );
    }
}

export default RenderPropsCount;
