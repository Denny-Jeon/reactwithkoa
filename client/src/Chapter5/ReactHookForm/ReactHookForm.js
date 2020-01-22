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
  password: Yup.string()
    .min(8, "password length > 8")
    .required("Required")
    .test("not permit 12345678", "not permit 12345678", (value) => value !== "12345678"),
  sns: Yup.object().shape({
    facebook: Yup.bool(),
    google: Yup.bool(),
    twitter: Yup.bool(),
  }).test("Select at least one", "Select at least one", (value) => value.facebook || value.google || value.twitter),
  age: Yup.number().min(1, "age > 1 ").required("Required"),
});


const ReactHookForm = () => {
  // touched, isValid, isSubmitting을 제어하기 위한 폼 상태 값 formState 추출
  const {
    register, handleSubmit, reset, errors, formState,
  } = useForm({
    mode: "onBlur", // 유효성 검증을 input을 벗어날 때마다 실시, default는 onChange
    defaultValues,
    validationSchema: schema,
  });

  const sleep = (second) => new Promise((resolve) => {
    setTimeout(() => {
      resolve("foo");
    }, 1000 * second);
  });

  const onSubmit = async (data, e) => {
    console.log("Submit event", e);
    console.log(data);

    await sleep(3);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>email:
        <input type="email" placeholder="email" name="email" ref={register} />
      </div>
      {errors.email && <p>{errors.email.message}</p>}
      <div>password:
        <input type="password" placeholder="password" name="password" ref={register} />
      </div>
      { (errors.password) && (<div>{errors.password.message}</div>)}

      <div>gender:
        <input name="gender" type="radio" value="male" ref={register} /> male
        <input name="gender" type="radio" value="female" ref={register} /> female
      </div>
      <div>
        Sns:
        <input type="checkbox" placeholder="sns.google" name="sns.google" ref={register} /> google
        <input type="checkbox" placeholder="sns.facebook" name="sns.facebook" ref={register} /> facebook
        <input type="checkbox" placeholder="sns.twitter" name="sns.twitter" ref={register} /> twitter
      </div>
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
        {/* 폼 상태가 isValid 하거나 isSubmitting인 아닌 경우 활성화 */}
        <button type="submit" disabled={!formState.isValid || formState.isSubmitting}>제출</button>
        <button type="button" onClick={() => reset()}>Reset</button>
      </div>
    </form>
  );
};

export default ReactHookForm;
