import React, { useState } from "react";
import classNames from "utils/classNames";
import { Field } from "formik";
import Image from "next/image";
// import { useField } from "formik";

type InputsT = {
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
  defaultValue?: string;
  multiple?: boolean;
  type?: string;
  required?: boolean;
  touched?: boolean;
  handleBlur?: any;
  as?: string;
};

const Input: React.FC<InputsT> = ({
  label,
  name,
  id,
  icon,
  className = "",
  error,
  containerClass = "",
  subClass = "",
  iconClass = "",
  labelClass = "",
  placeholder,
  defaultValue,
  multiple = false,
  type = "text",
  required = false,
  touched = false,
  as = "normal",
  handleBlur,
  ...attributes
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div className={classNames(containerClass, "flex flex-col")}>
      {label && (
        <label htmlFor={id} className={classNames(labelClass, "text-base")}>
          {label}
        </label>
      )}
      <div
        className={classNames(
          subClass,
          "bg-white rounded-[4px] px-2 py-2 w-full  border border-purple flex",
          isFocused ? "ring-[2px] ring-purple ring-opacity-30 ease-in-out duration-150" : "",
          touched && error ? "!border-danger" : ""
        )}
      >
        {icon && (
          <Image src={icon} unoptimized className={classNames(iconClass, "mr-2")} alt={""} />
        )}
        {as === "normal" ? (
          <input
            name={name}
            id={id}
            placeholder={placeholder}
            type={type}
            {...attributes}
            className={classNames(className, "outline-none w-full  ")}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            defaultValue={defaultValue}
            required={required}
          />
        ) : (
          <>
            {!multiple ? (
              <Field
                name={name}
                id={id}
                placeholder={placeholder}
                type={type}
                {...attributes}
                className={classNames(className, "outline-none w-full  ")}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  handleBlur(e);
                  setIsFocused(false);
                }}
                defaultValue={defaultValue}
                required={required}
              />
            ) : (
              <Field
                as="textarea"
                name={name}
                id={id}
                placeholder={placeholder}
                className={classNames(className, "outline-none w-full  ")}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  handleBlur(e);
                  setIsFocused(false);
                }}
                defaultValue={defaultValue}
                required={required}
                rows="8"
              />
            )}
          </>
        )}
      </div>
      {touched && error ? <span className="text-danger text-sm mt-1">{error}</span> : null}
    </div>
  );
};

export default Input;
