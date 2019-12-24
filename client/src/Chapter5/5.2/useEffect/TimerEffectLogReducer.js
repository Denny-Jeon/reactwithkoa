// Count.js
import React, { useState, useEffect } from "react";

const TimerEffectNLogShow = () => {
  // 현재 시간을 저장하는 state
  const [currentTime, setCurrentTime] = useState(new Date().toString());

  // 로그 출력 여부 state
  const [showLog, toggleShowLog] = useState(false);

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

  useEffect(() => {
    console.log("conditional useEffect");
    if (showLog) console.log(`currentTime: ${currentTime}`);
  }, [showLog, currentTime]);

  console.log("render");

  return (
    <div>
      <div> {currentTime}</div>
      <div>
        <button onClick={() => toggleShowLog(true)}>로그 출력 시작</button>
        <button onClick={() => toggleShowLog(false)}>로그 출력 중지</button>
      </div>
    </div>
  );
};

export default TimerEffectNLogShow;
