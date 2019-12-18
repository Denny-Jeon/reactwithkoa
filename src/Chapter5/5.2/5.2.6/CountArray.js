// Count.js
import React, { useState } from "react";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

const Count = () => {
  // useState을 이용해 count를 관리한다.
  const stateArray = useState(0);
  console.log(stateArray);

  return (
    <div>
      <div> Hello, JSX</div>
      {/* count를 props으로 전송 */}
      <CountView count={stateArray[0]} />
      {/* handleIncrease props으로 전송 */}
      <HandleView handleIncrease={() => stateArray[1]((prevCount) => prevCount + 1)} />
    </div>
  );
};

export default Count;
