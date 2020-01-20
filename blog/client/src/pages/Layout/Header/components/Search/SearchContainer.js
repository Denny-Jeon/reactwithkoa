// import React from "react";
import { compose, withState, withHandlers } from "recompose";
// 필드 유효성 검증을 위한 yup 모듈 import
import * as Yup from "yup";
import SearchView from "./SearchView";

export default compose(
  // 초기화 값
  withState("initialValues", "setInitialValues", {
    search: "",
  }),
  withHandlers({
    // 검색 버튼 클릭 시 동작
    handleSubmit: () => (values, { setSubmitting }) => {
      console.log(values);

      setTimeout(() => {
        setSubmitting(false);
      }, 5000);
    },
    // 유효성 검증
    handleValidateSchema: () => () => (
      Yup.object().shape({
        search: Yup.string(),
      })
    ),
  }),
)(SearchView);
