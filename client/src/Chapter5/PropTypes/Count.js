// Count.js
import React, { useState, useCallback } from "react";
import CountView from "./CountView";
import HandleView from "./HandleView";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(
    () => {
      setCount((prev) => prev + 1);
    },
    [],
  );
  return (
    <div>
      {/* hello만 전달하고 jsx는 전달하지 않는다. */}
      <CountView count={count} hello="Hello" />
      <HandleView handleIncrease={handleIncrease} />
    </div>
  );
};

export default Count;
