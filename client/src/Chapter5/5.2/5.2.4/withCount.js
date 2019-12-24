// withCount.js

// JSX 구문을 포함하지 않으므로 react를 import 하지 않는다.
// import React from "react";

// compose, withStateHandlers import
import { compose, withStateHandlers } from "recompose";

// compose를 이용한 HOC 합성
export default compose(
  // withStateHandlers를 이용하여 count를 관리한다.
  // withStateHandlers를 2개의 인자(initialState, stateUpdaters)를 갖고 사용법은 다음과 같다
  // withStateHandlers(
  //   initialState: Object | (props: Object) => Object, // 초기값 세팅
  //   stateUpdaters: {
  //     [key: string]: (state:Object, props:Object) => (...payload: any[]) => Object // state를 변경할 handlers 선언
  //   }
  // )
  withStateHandlers(
    // 초기 count 값을 셋팅
    ({ initialCount = 0 }) => ({ count: initialCount }),
    {
      // stateUpdaters handlers를 이중화살표 함수를 갖는다.
      handleIncrease: ({ count }) => () => ({
        count: count + 1,
      }),
    },
  ),
);
