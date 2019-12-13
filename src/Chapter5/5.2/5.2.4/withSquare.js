// withSquare.js

// JSX 구문을 포함하지 않으므로 react를 import 하지 않는다.
// import React from "react";

// compose, withState, withStateHandlers, withHandlers import
import {
  compose, withState, withStateHandlers, withHandlers,
} from "recompose";

export default compose(
  // squareTimes state Handlers 선언
  withStateHandlers(
    ({ initialTimes = 2 }) => ({
      squareTimes: initialTimes,
    }),
    {
      // squareTimes 증가시키는 handleIncreaseTimes handler 생성
      handleIncreaseTimes: ({ squareTimes }) => () => ({
        squareTimes: squareTimes + 1,
      }),
      // squareTimes 감소시키는 handleDecreaseTimes handler 생성
      handleDecreaseTimes: ({ squareTimes }) => () => ({
        squareTimes: squareTimes - 1,
      }),
    },
  ),
  // squareValue state와 state를 변경하는 setSquareValue 선언
  withState("squareValue", "setSquareValue", 0),
  // count에 squareTimes배 만큼 제곱시키는 handleSquare handler 선언
  withHandlers({
    handleSquare: (props) => ({ count }) => {
      props.setSquareValue(count ** props.squareTimes);
    },
  }),
);
