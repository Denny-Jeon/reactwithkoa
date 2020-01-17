import React from "react";
import { Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const FormikTest = ({
  handleSubmit,
  handleReset,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
}) => (
  <Form onSubmit={handleSubmit} onReset={handleReset}>
    <div> email:
      <input
        type="text"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
    </div>
    { (errors.email && touched.email) && (<div>ErrorMessage: <ErrorMessage name="email" /></div>) }
    { (errors.email && touched.email) && (<div>{errors.email}</div>)}
    <div> password:
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
    </div>
    { (errors.password && touched.password) && (<div>ErrorMessage: <ErrorMessage name="password" /></div>) }
    { (errors.password && touched.password) && (<div>{errors.password}</div>)}

    {/* 성별 추가 : radio 테스트 */}
    <div>
      Gender:
      <input
        type="radio"
        name="gender"
        onChange={handleChange}
        onBlur={handleBlur}
        value="male"
        defaultChecked={values.gender === "male"}
      />Male
      <input
        type="radio"
        name="gender"
        value="female"
        defaultChecked={values.gender === "female"}
      />Female
    </div>


    {/* sns 추가: checkbox 테스트  */}
    <div>
      SNS:
      <input
        type="checkbox"
        name="sns.google"
        onChange={handleChange}
        onBlur={handleBlur}
        value
        checked={values.sns.google}
      />Google
      <input
        type="checkbox"
        name="sns.facebook"
        onChange={handleChange}
        onBlur={handleBlur}
        value
        checked={values.sns.facebook}
      />Facebook
      <input
        type="checkbox"
        name="sns.twitter"
        onChange={handleChange}
        onBlur={handleBlur}
        value
        checked={values.sns.twitter}
      />Twitter
    </div>
    { (errors.sns && touched.sns) && (<div>ErrorMessage: <ErrorMessage name="sns" /></div>) }
    { (errors.sns && touched.sns) && (<div>{errors.sns}</div>)}


    {/* 나이 추가 : select 테스트 */}
    <div>
      나이:
      <select
        name="age"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
      >
        <option value={0}>-------------</option>
        {
          [...Array(100).keys()].map((x) => <option key={x} value={x + 1}>{x + 1}</option>)
        }
      </select>
    </div>
    { (errors.age && touched.age) && (<div>ErrorMessage: <ErrorMessage name="age" /></div>) }
    { (errors.age && touched.age) && (<div>{errors.age}</div>)}


    <button type="submit" disabled={!isValid || isSubmitting}>제출</button>
    <button type="reset">취소</button>
    <div>{isValid}</div>
  </Form>
);

FormikTest.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    gender: PropTypes.string,
    sns: PropTypes.shape({
      google: PropTypes.bool,
      facebook: PropTypes.bool,
      twitter: PropTypes.bool,
    }),
    age: PropTypes.any, // number
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    gender: PropTypes.string,
    sns: PropTypes.string,
    age: PropTypes.string,
  }).isRequired,
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool,
    gender: PropTypes.bool,
    sns: PropTypes.shape({
      google: PropTypes.bool,
      facebook: PropTypes.bool,
      twitter: PropTypes.bool,
    }),
    age: PropTypes.bool,
  }).isRequired,
};

export default FormikTest;
