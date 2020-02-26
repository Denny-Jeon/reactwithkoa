import React from "react";
import {
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { Formik } from "formik";
import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => (
  <Form onSubmit={handleSubmit} inline className="ml-auto">
    <InputGroup size="sm">
      <Input
        type="search"
        name="search"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.search}
        placeholder="검색어를 입력해 주세요."
        className="form-control-navbar"
      />
      <InputGroupAddon addonType="append">
        <Button type="submit" disabled={isSubmitting} className="btn-navbar">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroupAddon>
    </InputGroup>

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
    enableReinitialize
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
