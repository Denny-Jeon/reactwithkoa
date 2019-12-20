// Count.js
import React, { useState, useEffect } from "react";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

const Count = () => {
  // useState을 이용해 count를 관리한다.
  const [count, setCount] = useState(0);
  const [evenOrOdd, setEvenOrOdd] = useState(true);

  console.log("abc", count, evenOrOdd);

  useEffect(() => {
    console.log(123);

    if (count % 2 === 0) {
      setEvenOrOdd(true);
    } else {
      setEvenOrOdd(false);
    }
  });

  return (
    <div>
      <div> Hello, JSX</div>
      {/* count를 props으로 전송 */}
      <CountView count={count} />
      {/* handleIncrease props으로 전송 */}
      <HandleView handleIncrease={() => setCount((prevCount) => prevCount + 1)} />

      <div>
        {evenOrOdd ? "짝수" : "홀수"}
      </div>
    </div>
  );
};

export default Count;
