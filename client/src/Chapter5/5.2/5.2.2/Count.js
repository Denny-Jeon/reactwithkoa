// Count.js

import React from "react";

// count와 handleIncrease를 갖는 withCount import
import withCount from "./withCount";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

// state가 없기 때문에 함수형 컴포넌트로 구현한다.
// props로 count와 handleIncrease를 받는다.
const Count = ({ count, handleIncrease }) => (
  <div>
    <div> Hello, JSX</div>
    {/* count를 props으로 전송 */}
    <CountView count={count} />
    {/* handleIncrease props으로 전송 */}
    <HandleView handleIncrease={handleIncrease} />
  </div>
);

// withCount HoC를 포함한 컴포넌트를 export.
export default withCount(Count);
