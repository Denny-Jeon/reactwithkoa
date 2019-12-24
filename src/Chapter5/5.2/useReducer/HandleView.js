// HandleView.js

import React from "react";

// 함수형 컴포넌트
const HandleView = ({ handleIncrease }) => (
  /* onClick 이벤트에 props로 전달받은 handleIncrease 함수로 설정 */
  <button type="button" onClick={handleIncrease}>+</button>
);

export default HandleView;
