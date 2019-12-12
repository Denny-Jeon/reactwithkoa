// HandleView.js

import React from "react";

// 함수형 컴포넌트
const HandleSquareView = ({ count, handleSetTimes, handleSquare }) => (
  // onClick 이벤트에 props로 전달받은 handleIncrease 함수로 설정
  <button type="button" onClick={() => handleSquare({ count })}>x</button>
);

export default HandleSquareView;
