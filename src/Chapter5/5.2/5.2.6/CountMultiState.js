// Count.js
import React, { useState } from "react";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

const Count = () => {
  // useState을 이용해 count를 관리한다.
  const [count, setCount] = useState(0);

  // useState을 이용해 현재시간을 관리하는 currentTime을 선언한다.
  const [currentTime, setCurrentTime] = useState(`현재 시각은 ${new Date()} 입니다.`);


  return (
    <div>
      <div> Hello, JSX</div>
      {/* count를 props으로 전송 */}
      <CountView count={count} />
      {/* 과거 state값을 이용하여 갱신한다. */}
      <HandleView handleIncrease={() => setCount((prevCount) => prevCount + 1)} />

      <div>{currentTime}</div>
      {/* 과거 state값을 사용하지 않고 직접 갱신을 수행한다. */}
      <button type="button" onClick={() => setCurrentTime(`현재 시각은 ${new Date()} 입니다.`)}>
        현재시간
      </button>
    </div>
  );
};

export default Count;
