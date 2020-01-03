// StopWatchViewer.js
import React, { useRef } from "react";
import StopWatch from "./StopWatch";

const StopWatchViewer = () => {
  const stopWatchRef = useRef();

  return (
    <>
      <StopWatch ref={stopWatchRef} />
      <button type="button" onClick={() => stopWatchRef.current.resetCurrentTime(0)}>Reset</button>
      <button type="button" onClick={() => stopWatchRef.current.setStop()}>Stop or Resume</button>
    </>
  );
};

export default StopWatchViewer;
