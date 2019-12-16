// Count.js

import React from "react";

// count와 handleIncrease를 갖는 withCount import
import withCount from "./withCount";
import withLog from "./withLogTrue";

// count를 출력한 컴포넌트 import
import CountView from "./CountView";
// count를 증가시킬 컴포넌트 import
import HandleView from "./HandleView";

// 라이프사이클 메소드가 구동되기 위해 클래스 컴포넌트로 구현
// class Count extends React.Component {
//   render() {
//     const { count, handleIncrease } = this.props;

//     return (
//       <div>
//         <div> Hello, JSX</div>
//         {/* count를 props으로 전송 */}
//         <CountView count={count} />
//         {/* handleIncrease props으로 전송 */}
//         <HandleView handleIncrease={handleIncrease} />
//       </div>
//     );
//   }
// }

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
export default withCount(withLog(Count));
