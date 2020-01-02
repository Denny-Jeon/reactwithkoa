// CountView.js

import React from "react";

// 함수형 컴포넌트로 재구성
const CountView = ({ count }) => (
  // Count 컴포넌트에서 전달받은 count prop 출력
  <div>{count}</div>
);

export default CountView;
