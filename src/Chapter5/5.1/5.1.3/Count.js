// Count.js

import React from "react";

// count와 handleIncrease를 갖는 withCount import
import withCount from "./withCount";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

// class로 선언하고 React.Component를 상속받는다.
class Count extends React.Component {

  // 반드시 render 함수를 포함해야 한다.
  // render 함수에 출력하고자 하는 JSX를 포함한다.
  render () {
    const { count, handleIncrease } = this.props;

    return (
      <div>
        <div> Hello, JSX</div>
        {/* count를 props으로 전송 */}
        <CountView count={count} />
        {/* handleIncrease props으로 전송 */}
        <HandleView handleIncrease={handleIncrease} />
      </div>
    );
  }
}

// withCount HoC를 포함한 컴포넌트를 export.
export default withCount(Count);
