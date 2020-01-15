// import React from "react";
import { compose, withStateHandlers, withHandlers } from "recompose";
import View from "./View";

export default compose(
  // 초기화
  withStateHandlers(
    () => ({
      initialValues: {
        email: "",
        password: "",
      },
    }),
    {
      // reset 함수 정의
      handleReset: () => () => ({
        initialValues: {
          email: "",
          password: "",
        },
      }),
    },
  ),
  withHandlers({
    // 폼을 submit 클릭 시 동작할 함수 정의
    handleSubmit: (props) => ({ values }) => {
      console.log(values);
    },
  }),
)(View);
