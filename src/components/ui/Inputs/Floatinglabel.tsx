"use client";
import React from "react";
import classNames from "utils/classNames";
import { Field, useFormikContext } from "formik";

type FloatingLabelT = {
  label?: string;
  icon?: string;
  className?: string;
  containerClass?: string;
  subClass?: string;
  iconClass?: string;
  labelClass?: string;
  error?: string;
  name: string;
  id: string;
  placeholder?: string;
  type: string;
  validate?: () => void;
  disabled?: boolean;
  value?: string | number | Date;
  defaultValue?: string | number | Date;
  required?: boolean;
  touched?: boolean;
};

const Floatinglabel: React.FC<FloatingLabelT> = ({
  label,
  type,
  id,
  name,
  validate,
  disabled = false,
  value,
  defaultValue,
  error,
  containerClass = "",
  touched = false,
  required = false,
}) => {
  const { handleBlur } = useFormikContext();
  return (
    <div className={classNames("flex flex-col mb-5", containerClass)}>
      <div className={classNames("relative input-wrapper")}>
        <Field
          type={type}
          id={id}
          name={name}
          className={classNames(
            "block rounded-lg border border-gray-200 overflow-hidden px-2.5 pb-2.5 pt-5 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 focus:border-archo-blue focus:border-b-2 peer disabled:text-slate-200",
            touched && error ? "!border-danger" : ""
          )}
          placeholder=""
          validate={validate}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          required={required}
          onBlur={handleBlur}
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-light-gray duration-300 transform floating-label"
        >
          {label}
        </label>
      </div>
      {touched && error ? <div className="text-danger">{error}</div> : null}
    </div>
  );
};

export default Floatinglabel;
