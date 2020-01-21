import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import * as Yup from "yup";

const defaultValues = {
  email: "",
  password: "",
  gender: "male",
  sns: {
    facebook: false,
    google: false,
    twitter: false,
  },
  age: 10,
};

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(8, "password length > 8").required("Required"),
  sns: Yup.object().shape({
    facebook: Yup.bool(),
    google: Yup.bool(),
    twitter: Yup.bool(),
  }).test("Select at least one", "Select at least one", (value) => value.facebook || value.google || value.twitter),
  age: Yup.number().min(1, "age > 1 ").required("Required"),
});

const App = () => {
  const {
    register, handleSubmit, reset, errors, formState,
  } = useForm({
    mode: "onBlur",
    defaultValues,
    validationSchema: schema,
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>email:
        <input type="email" placeholder="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
      </div>
      <ErrorMessage errors={errors} name="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <div>password:
        <input type="password" placeholder="password" name="password" ref={register({ required: true, min: 8 })} />
      </div>
      <ErrorMessage errors={errors} name="password" />
      { (errors.password) && (<div>{errors.password.message}</div>)}

      <div>gender:
        <input name="gender" type="radio" value="male" ref={register({ required: true })} /> male
        <input name="gender" type="radio" value="female" ref={register({ required: true })} /> female
      </div>
      <div>
        Sns:
        <input type="checkbox" placeholder="sns.google" name="sns.google" ref={register} /> google
        <input type="checkbox" placeholder="sns.facebook" name="sns.facebook" ref={register} /> facebook
        <input type="checkbox" placeholder="sns.twitter" name="sns.twitter" ref={register} /> twitter
      </div>
      <ErrorMessage errors={errors} name="sns" />
      { (errors.sns) && (<div>{errors.sns.message}</div>)}
      <div>
          Age:
        <select name="age" ref={register}>
          <option value={0}>-------------</option>
          {
            [...Array(100).keys()].map((x) => <option key={x} value={x + 1}>{x + 1}</option>)
          }
        </select>
      </div>
      <ErrorMessage errors={errors} name="age" />
      { (errors.age) && (<div>{errors.age.message}</div>)}
      <div>

        <pre>{JSON.stringify(formState, null, 2)}</pre>
        <input type="submit" disabled={!formState.isValid || formState.isSubmitting} />
        <button type="button" onClick={() => reset()}>Reset</button>
      </div>
    </form>
  );
};

export default App;
