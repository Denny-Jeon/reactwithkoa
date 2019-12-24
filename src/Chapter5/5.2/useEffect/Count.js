// Count.js
import React, { useState, useEffect } from "react";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

const Count = () => {
  // useState을 이용해 count를 관리한다.
  const [count, setCount] = useState(0);

  // useState을 이용해 page를 관리한다.
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log("Run only once, like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("Run this effect if count is changed, like componentDidUpdate");
  }, [count]);

  useEffect(() => {
    console.log("Run every render componentDidUpdate");
  });

  useEffect(() => () => console.log("Run only ComponentWillUnmount."),
    []);

  return (
    <div>
      <div> Hello, JSX</div>
      {/* count를 props으로 전송 */}
      Count: <CountView count={count} />
      Page: <CountView count={page} />

      {/* handleIncrease props으로 전송 */}
      Count: <HandleView handleIncrease={() => setCount((prevCount) => prevCount + 1)} />
      Page: <HandleView handleIncrease={() => setPage((prevPage) => prevPage + 1)} />
    </div>
  );
};

export default Count;
