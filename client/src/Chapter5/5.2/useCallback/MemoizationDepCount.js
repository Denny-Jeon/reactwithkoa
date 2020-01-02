// Count.js
import React, { useState, useCallback } from "react";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

// 메모라이제이션 함수 개수 저장 변수
const cached = new Set();

const Count = () => {
  // useState을 이용해 count를 관리한다.
  const [count, setCount] = useState(0);

  // useState을 이용해 count를 관리한다.
  const [addedNumber, setAddedNumber] = useState(1);

  // count 증가 함수
  const increaseCount = useCallback(() => setCount((prevCount) => prevCount + addedNumber), [addedNumber]);

  // addedNumber 증가 함수
  const increaseAddedNumber = useCallback(() => setAddedNumber((prev) => prev + 1), []);

  // count 함수 등록
  cached.add(increaseCount);

  // addedNumber 함수 등록
  cached.add(increaseAddedNumber);

  return (
    <div>
      <div> Hello, JSX</div>
      {/* count를 props으로 전송 */}
      <CountView count={count} />

      {/* handleIncrease props으로 전송 */}
      Add Counter: <HandleView handleIncrease={increaseCount} />
      <br />
      Add NUMBER: <HandleView handleIncrease={increaseAddedNumber} />
      {/* cached 함수 출력  */}
      <div>함수개수: {cached.size - 2}</div>
    </div>

  );
};

export default Count;
