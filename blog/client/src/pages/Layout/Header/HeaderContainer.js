// compose와 withStateHandler를 사용하는 recompose import
import { compose, withStateHandlers } from "recompose";
// Presentation 컴포넌트인 HeaderView import
import HeaderView from "./HeaderView";

export default compose(
  // state hanlder 선언
  withStateHandlers(
    // open state 초기 값 설정 = false
    ({ initialOpen = false }) => ({ open: initialOpen }),
    {
      // open 변수를 변경하는 함수
      setToggle: ({ open }) => () => ({ open: !open }),
    },
  ),
// HeaderView로 open, setToggle이 props로 전달됨.
)(HeaderView);
