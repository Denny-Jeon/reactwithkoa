import React from "react";
import { Formik } from "formik";
import FormikTest from "./FormikTest";

const View = ({ initialValues, handleSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
  >
    {(props) => (
      <FormikTest {...props} />
    )}
  </Formik>
);

export default View;
