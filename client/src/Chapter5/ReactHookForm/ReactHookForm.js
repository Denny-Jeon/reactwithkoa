import React from "react";
// ErrorMessage 추가
import { useForm, ErrorMessage } from "react-hook-form";

const ReactHookForm = () => {
  // errors 출력을 위한 errors 객체 추가
  const {
    register, handleSubmit, reset, errors,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log("Submit event", e);
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>email:
        <input
          type="email"
          placeholder="email"
          name="email"
          // register에 required, pattern 유효성 검사 추가
          ref={register({
            required: "This is required",
            pattern: { value: /^\S+@\S+$/i, message: "not email" },
          })}
        />
      </div>
      <div>
        {/* 에러가 발생한 경우 출력 */}
        <ErrorMessage errors={errors} name="email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>password:
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register({
            required: true,
            minLength: 8,
            validate: ((value) => value !== "12345678"),
          })}
        />
      </div>
      <div>
        {/* 에러가 발생한 경우 출력 */}
        {errors.password && errors.password.type === "required" && <p>required</p>}
        {errors.password && errors.password.type === "minLength" && <p>minLength</p>}
        {errors.password && errors.password.type === "validate" && <p>not permit 12345678</p>}
      </div>

      <div>
        <button type="submit">제출</button>
        <button type="button" onClick={() => reset()}>취소</button>
      </div>
    </form>
  );
};

export default ReactHookForm;
