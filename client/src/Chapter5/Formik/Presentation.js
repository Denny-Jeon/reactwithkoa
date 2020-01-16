import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import FormikTest from "./FormikTest";

const View = ({
  initialValues, handleSubmit, handleValidateSchema,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={handleValidateSchema()}
  >
    {/* render prop을 사용하지 않고 합성으로 처리 */}
    {
      // eslint-disable-next-line react/jsx-props-no-spreading
      (formikProps) => (<FormikTest {...formikProps} />)
    }
  </Formik>
);

View.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleValidateSchema: PropTypes.func.isRequired,
};


export default View;
