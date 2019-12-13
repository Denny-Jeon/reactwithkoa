// CountView.js

import React from "react";

/**
 * @param  {number} squareTimes
 * @param  {number} squareValue
 */
const SquareView = ({ squareTimes, squareValue }) => (
  <>
    {/* Count 컴포넌트에서 전달받은 squareTimes, squareValue prop 출력 */}
    <div>현재 배수 {squareTimes}배</div>
    <div>{squareValue}</div>
  </>
);

export default SquareView;
