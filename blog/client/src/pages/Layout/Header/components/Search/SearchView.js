import React from "react";
import {
  Form,
  Input,
  Button,
} from "reactstrap";
import { Formik } from "formik";
import PropTypes from "prop-types";

const SearchForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => (
  <Form onSubmit={handleSubmit} inline className="my-2 my-log-0">
    <Input
      type="search"
      name="search"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.search}
      placeholder="검색어를 입력해 주세요."
      className="mr-sm-2"
    />
    <Button type="submit" disabled={isSubmitting} className="my-2 my-sm-0" color="success">검색</Button>
  </Form>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    search: PropTypes.string,
  }),
  isSubmitting: PropTypes.bool.isRequired,
};

SearchForm.defaultProps = {
  values: {
    search: "",
  },
};

const SearchView = ({ initialValues, handleSubmit, handleValidateSchema }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={handleValidateSchema()}
    validateOnMount
  >
    {
      // eslint-disable-next-line react/jsx-props-no-spreading
      (formikProps) => (<SearchForm {...formikProps} />)
    }

  </Formik>
);

SearchView.propTypes = {
  initialValues: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleValidateSchema: PropTypes.func.isRequired,
};

export default SearchView;
