// Count.js
import React, { useState, useLayoutEffect } from "react";

const TimerEffect = () => {
  // 현재 시간을 저장하는 state
  const [currentTime, setCurrentTime] = useState(new Date().toString());

  useLayoutEffect(() => {
    console.log("useEffect");
    if (currentTime === 0) {
      setCurrentTime(new Date().toString());
    }
  }, [currentTime]);

  console.log("render");

  return (
    <div>
      <button type="button" onClick={() => setCurrentTime(0)}> {currentTime}</button>
    </div>
  );
};

export default TimerEffect;
