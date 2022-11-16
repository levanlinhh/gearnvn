import React from "react";

const InputField = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  name,
  type,
}) => {
  return (
    <div>
      <input
        value={values[`${name}`]}
        onChange={handleChange}
        onBlur={handleBlur}
        id={name}
        type={type}
        placeholder={name}
        className={
          errors[`${name}`] && touched[`${name}`] ? "input-errors" : ""
        }
      />
      {errors[`${name}`] && touched[`${name}`] ? (
        <span className="errors">{errors[`${name}`]}</span>
      ) : (
        <span className="errors-empty">{errors.message}</span>
      )}
    </div>
  );
};

export default InputField;
