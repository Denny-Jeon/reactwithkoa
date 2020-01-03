// // StopWatch.js
import React, {
  useState, useEffect, useImperativeHandle,
} from "react";

const StopWatch = (props, ref) => {
  // const aref = useRef();

  // 시간 저장 변수
  const [currentTime, setCurrentTime] = useState(0);

  // StopWatch 시작/중지 변수
  const [stop, setS] = useState(false);

  useEffect(() => {
    // 시간 저장 타이머 구동
    const timerId = setInterval(() => {
      if (!stop) {
        setCurrentTime((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      // 종료 시 타이머 클리어
      clearInterval(timerId);
    };
  }, [stop]);


  // ref를 사용할 때 부모 컴포넌트에 노출되는 인스턴스 값을 정의
  useImperativeHandle(ref, () => ({
    setStop: () => setS((prev) => !prev),
    resetCurrentTime: (time) => setCurrentTime(time),
  }));

  return (
    <div>
      <div>{ currentTime }</div>
    </div>
  );
};

// forwareRef는 리액트 컴포넌트를 통해 ref를 자동으로 하위 컴포넌트 중 하나에 전달하는 기술
export default React.forwardRef(StopWatch);
