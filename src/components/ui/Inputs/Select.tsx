import React, { useState } from "react";
import classNames from "utils/classNames";
import { Field } from "formik";

type option = {
  label: string;
  value: string | number;
};

type SelectT = {
  label?: string;
  className?: string;
  containerClass?: string;
  subClass?: string;
  labelClass?: string;
  error?: string;
  name: string;
  id: string;
  defaultValue?: string | number;
  options: option[];
  as?: "form" | "normal";
  select?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectT> = ({
  label,
  name,
  id,
  className = "",
  containerClass = " ",
  subClass = " ",
  labelClass = "",
  options,
  error,
  defaultValue,
  as = "normal",
  select,
  onChange,
  required = false,
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
          "bg-white rounded-[4px] px-2 w-full  border border-purple flex",
          isFocused ? "ring-[2px] ring-purple ring-opacity-30 ease-in-out duration-150" : "",
          error ? " !border-danger" : ""
        )}
      >
        {as === "form" ? (
          <>
            <Field
              as="select"
              name={name}
              id={id}
              {...attributes}
              className={classNames(className, "outline-none w-full bg-white py-5 ")}
              onFocus={() => {
                setIsFocused(true);
              }}
              required={required}
              onBlur={() => setIsFocused(false)}
              value={defaultValue}
            >
              {select && (
                <option value={select} className="capitalize">
                  {select}
                </option>
              )}
              {options.map((p: option, i: number) => (
                <option key={i} className="py-4 w-full" value={p.value}>
                  {p.label}
                </option>
              ))}
            </Field>
          </>
        ) : (
          <select
            name={name}
            id={id}
            {...attributes}
            className={classNames(className, "outline-none w-full bg-white py-5 ")}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            defaultValue={defaultValue}
            required={required}
            onChange={onChange}
          >
            {select && (
              <option value={select} className="capitalize">
                {select}
              </option>
            )}
            {options.map((p: option, i) => (
              <option key={i} className="py-4" value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        )}
      </div>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Select;
