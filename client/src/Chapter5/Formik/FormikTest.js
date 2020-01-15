import React from "react";
import { Form } from "formik";

const FormikTest = ({
  handleSubmit, handleChange, handleBlur, values,
}) => (
  <Form onSubmit={handleSubmit}>
    <input
      type="text"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    <input
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    <button type="submit">제출</button>
  </Form>
);

export default FormikTest;
