// Count.js

import React from "react";

// count와 handleIncrease를 갖는 withCount import
import withCount from "./withCount";
// squareTimes, squareValue, handleIncreaseTimes, handleDecreaseTimes, handleSquare를 갖는 withSquare import
import withSquare from "./withSquare";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

// squareTimes, squareValue를 출력하는 컴포넌트 import
import SquareView from "./SquareView";
// count를 제곱(handleSquare)하고 배수를 증가, 감소(handleIncreaseTimes, handleDecreaseTimes) 시키는 컴포넌트 import
import HandleSquareView from "./HandleSquareView";

// state가 없기 때문에 함수형 컴포넌트로 구현한다.
/**
 * @param  {number} count
 * @param  {function} handleIncrease
 * @param  {number} squareTimes
 * @param  {number} squareValue
 * @param  {function} handleIncreaseTimes
 * @param  {function} handleDecreaseTimes
 * @param  {function} handleSquare
 */
const Count = ({
  count, handleIncrease, squareTimes, squareValue, handleIncreaseTimes, handleDecreaseTimes, handleSquare,
}) => (
  <div>
    <div> Hello, JSX</div>
    {/* count를 props으로 전송 */}
    <CountView count={count} />
    {/* handleIncrease props으로 전송 */}
    <HandleView handleIncrease={handleIncrease} />
    <hr />

    {/* squareTimes, squareValue를 props으로 전송 */}
    <SquareView
      squareTimes={squareTimes}
      squareValue={squareValue}
    />
    {/* count, handleIncreaseTimes, handleDecreaseTimes, handleSquare를 props으로 전송 */}
    <HandleSquareView
      count={count}
      handleIncreaseTimes={handleIncreaseTimes}
      handleDecreaseTimes={handleDecreaseTimes}
      handleSquare={handleSquare}
    />
  </div>
);

// withSquare, withCount HoC를 포함한 컴포넌트를 export.
export default withSquare(withCount(Count));
