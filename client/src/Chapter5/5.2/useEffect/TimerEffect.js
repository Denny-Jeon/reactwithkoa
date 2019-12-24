// Count.js
import React, { useState, useEffect } from "react";

const TimerEffect = () => {
  // 현재 시간을 저장하는 state
  const [currentTime, setCurrentTime] = useState(new Date().toString());

  useEffect(() => {
    console.log("setInterval");
    // 현재 시각을 저장하기 위한 타이머 구동
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toString());
    }, 1000);

    return () => {
      // 컴포넌트 종료 시 타이머 클리어
      clearInterval(timerId);
    };
  }, []);

  console.log("render");

  return (
    <div>
      <div> {currentTime}</div>
    </div>
  );
};

export default TimerEffect;
