// - Title.js
import React from "react";

// props 중 title을 받는다.
const Title = ({ title }) => (
  // 부모에게서 전달된 title을 출력한다.
  <h1>{title}</h1>
);

export default Title;
