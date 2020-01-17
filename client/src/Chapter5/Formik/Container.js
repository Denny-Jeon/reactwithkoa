// import React from "react";
import {
  compose, withHandlers, withState,
} from "recompose";
import * as Yup from "yup";
import Presentation from "./Presentation";

export default compose(
  withState("initialValues", "setInitialValues", {
    email: "",
    password: "",
    gender: "male",
    sns: {
      facebook: false,
      google: false,
      twitter: false,
    },
    age: 10,
  }),
  withHandlers({
    handleSubmit: (props) => (values, { setSubmitting }) => {
      console.log(values);

      setTimeout(() => {
        setSubmitting(false);
      }, 5000);
    },
    handleValidateSchema: (prop) => () => (
      Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(8, "password length > 8").required("Required"),
        sns: Yup.object().shape({
          facebook: Yup.bool(),
          google: Yup.bool(),
          twitter: Yup.bool(),
        }).test("Select at least one", "Select at least one", (value) => value.facebook || value.google || value.twitter),
        age: Yup.number().min(1, "age > 1 ").required("Required"),
      })
    ),
  }),
)(Presentation);
