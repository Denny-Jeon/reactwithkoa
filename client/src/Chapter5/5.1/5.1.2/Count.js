// App.js

import React from "react";
// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

// class로 선언하고 React.Component를 상속받는다.
class Count extends React.Component {

  // count state를 선언
  state = {
    count: 0,
  }

  // count를 하나씩 증가시키는 메소드 추가
  handleIncrease = () => {
    const { count } = this.state;
    // setState 함수를 호출하여 count를 증가시킨다.
    this.setState( { count: count + 1} );
  }

  // 반드시 render 함수를 포함해야 한다.
  // render 함수에 출력하고자 하는 JSX를 포함한다.
  render () {
    const { count } = this.state;

    return (
      <div>
        <div> Hello, JSX</div>
        {/* count를 props으로 전송 */}
        <CountView count={count} />
        {/* this.handleIncrease를 handleIncrease props으로 전송 */}
        <HandleView handleIncrease={this.handleIncrease} />
      </div>
    );
  }
}

export default Count;
