import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import PropTypes from "prop-types";


const schema = Yup.object().shape({
  title: Yup.string().required("Required"),
  body: Yup.string().required("Required"),
});


const PostForm = ({ defaultValues, create, update }) => {
  const {
    register, handleSubmit, reset, errors, formState,
  } = useForm({
    mode: "onBlur",
    defaultValues,
    validationSchema: schema,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);


  const onSubmit = async (data) => {
    if (!defaultValues.id) {
      create(data);
    } else {
      update({
        id: defaultValues.id,
        ...data,
      });
    }
    reset();
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>title:
        <input type="title" placeholder="title" name="title" ref={register} />
      </div>
      {errors.title && <p>{errors.title.message}</p>}
      <div>body:
        <textarea type="body" placeholder="body" name="body" ref={register} row="10" />
      </div>
      { (errors.body) && (<div>{errors.body.message}</div>)}

      <div>
        <button type="submit" disabled={!formState.isValid || formState.isSubmitting}>제출</button>
        <button type="button" onClick={() => reset()}>Reset</button>
      </div>
    </form>
  );
};

PostForm.propTypes = {
  defaultValues: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
    userId: PropTypes.number,
  }).isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default PostForm;
