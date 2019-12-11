// CountView.js

import React from "react";

// class로 선언하고 React.Component를 상속받는다.
class CountView extends React.Component {

  // 반드시 render 함수를 포함해야 한다.
  // render 함수에 출력하고자 하는 JSX를 포함한다.
  render () {
    // parent(Count.js)에서 props로 전송된 count를 조회
    const { count } = this.props;

    return (
        // count를 출력한다.
        <div>{ count } </div>
    );
  }
}

export default CountView;
