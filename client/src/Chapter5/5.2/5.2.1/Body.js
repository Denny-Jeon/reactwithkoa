// - Body.js
import React from "react";
import Title from "./Title";

// props 중 title, children을 받는다.
// 리액트 컴포넌트는 항상 children이라는 prop을 넘긴다. children prop이 null인 경우도 있다.
// Page component에서 넘긴 children은 <div>content</div> 이다.
const Body = ({ title, children }) => (
  <>
    {/* Title 컴포넌트를 합성하고 title prop을 넘긴다. */}
    <Title title={title} />
    {/* 부모(Page 컴포넌트)에서 전달된 children을 출력한다. */}
    {children}
  </>
);

export default Body;
