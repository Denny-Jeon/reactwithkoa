// HandleView.js

import React from "react";

/**
 * @param  {number} count
 * @param  {function} handleIncreaseTimes
 * @param  {function} handleDecreaseTimes
 * @param  {function} handleSquare
 */
const HandleSquareView = ({
  // eslint-disable-next-line react/prop-types
  count, handleIncreaseTimes, handleDecreaseTimes, handleSquare,
}) => (
  <>
    {/* onClick 이벤트에 props로 전달받은 handleIncrease 함수로 설정 */}
    <button type="button" onClick={() => handleSquare({ count })}>x</button>
    <button type="button" onClick={handleIncreaseTimes}>배수증가</button>
    <button type="button" onClick={handleDecreaseTimes}>배수감소</button>
  </>
);

export default HandleSquareView;
