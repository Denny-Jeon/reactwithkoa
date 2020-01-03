// StopWatchViewer.js
import React, { useRef } from "react";
import StopWatch from "./StopWatch";

const StopWatchViewer = () => (
  <>
    <StopWatch />
    <button type="button" onClick={() => resetCurrentTime(0)}>Reset</button>
    <button type="button" onClick={() => setStop()}>Stop or Resume</button>
  </>
);

export default StopWatchViewer;
